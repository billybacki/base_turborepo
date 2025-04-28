import { useReadContracts } from 'wagmi'
import { Address, erc20Abi } from 'viem'
import { useMemo } from 'react'
import { Currency, CurrencyAmount } from '@repo/currency'

/***
 * !!! This is very important, if you get eth balance error, you must configure the multicall3 address
 * @description Get multicall3 address
 * @param chainId Chain ID
 * @returns Multicall3 address
 */
export const getMulticall3Address = (chainId: number) => {
  if (chainId === 6001) return '0x3DD3cfc05d65355f0F7df74C266dEEf49E080084'
  return '0xca11bde05977b3631167028862be2a173976ca11'
}

const getEthBalanceQueryParams = (chainId: number, userAddress: Address) => {
  return {
    abi: [
      {
        inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
        name: 'getEthBalance',
        outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function'
      }
    ],
    address: getMulticall3Address(chainId) as Address,
    chainId: chainId,
    functionName: 'getEthBalance',
    args: [userAddress]
  }
}

/**
 * Hook to fetch ERC20 token basic information
 * @param address Token contract address
 * @param chainId Chain ID
 * @returns Token instance and loading error state
 */
export function useToken(address: Address, chainId: number) {
  const { data, isLoading, isError } = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address,
        abi: erc20Abi,
        chainId,
        functionName: 'decimals'
      },
      {
        address,
        abi: erc20Abi,
        chainId,
        functionName: 'symbol'
      },
      {
        address,
        abi: erc20Abi,
        chainId,
        functionName: 'name'
      }
    ],
    query: {
      enabled: !!address && !!chainId
    }
  })

  const token = useMemo(() => {
    if (!data) return undefined
    return new Currency(chainId, address, Number(data[0]), data[1], data[2])
  }, [address, chainId, data])

  return { token, isLoading, isError }
}

/**
 * Hook to fetch single currency balance
 * @param account User account address
 * @param currency Currency instance
 * @returns CurrencyAmount instance
 */
export function useCurrencyBalance(account: string, currency: Currency | undefined) {
  const { balances, isLoading, refetchBalances } = useCurrencyBalances(account, [currency])
  return { balance: balances?.[0], isLoading, refetchBalances }
}

/**
 * Hook to fetch multiple currency balances
 * @param account User account address
 * @param currencies Array of Currency instances
 * @returns Object containing balances array and loading state
 */
export function useCurrencyBalances(
  account: string,
  currencies: (Currency | undefined)[]
): { balances: (CurrencyAmount<Currency> | undefined)[]; isLoading: boolean; refetchBalances: () => void } {
  const validCurrencies = useMemo(() => currencies.filter(Boolean) as Currency[], [currencies])

  const contracts = useMemo(() => {
    if (!account) return []

    return validCurrencies.map(currency => {
      if (currency.isNative) {
        return getEthBalanceQueryParams(currency.chainId, account as Address)
      }
      return {
        address: currency.address,
        abi: erc20Abi as any,
        chainId: currency.chainId,
        functionName: 'balanceOf',
        args: [account as Address]
      }
    })
  }, [account, validCurrencies])

  const {
    data: balanceResults,
    isLoading,
    refetch: refetchBalances
  } = useReadContracts({
    allowFailure: true,
    contracts: contracts,
    query: {
      enabled: !!account && validCurrencies.length > 0,
      refetchInterval: 10_000
    }
  })

  const balanceMap = useMemo(() => {
    return validCurrencies.reduce<Record<string, string>>((memo, currency, i) => {
      const value = balanceResults?.[i]?.result?.toString()
      if (value) {
        const key = currency.isNative ? `native-${currency.chainId}` : `${currency.address}-${currency.chainId}`
        memo[key] = value
      }
      return memo
    }, {})
  }, [validCurrencies, balanceResults])

  const balances = useMemo(() => {
    return currencies.map(currency => {
      if (!currency) return undefined

      const key = currency.isNative ? `native-${currency.chainId}` : `${currency.address}-${currency.chainId}`

      const balance = balanceMap[key]
      return balance ? CurrencyAmount.fromRawAmount(currency, balance) : undefined
    })
  }, [currencies, balanceMap])

  return { balances, isLoading, refetchBalances }
}
