'use client'

import { useAccount, useChainId } from 'wagmi'
import { useMemo } from 'react'

/**
 * @deprecated Use useEvmWallet instead
 * @returns The active Web3 React context
 */
export function useActiveWeb3React() {
  return useEvmWallet()
}

/**
 * Hook to access the current EVM wallet state
 * @returns {Object} An object containing:
 * - account: The connected wallet address
 * - chainId: The current chain ID
 * - isSupportChain: Boolean indicating if the current chain is supported
 */
export function useEvmWallet() {
  const chainId = useChainId()
  const { address } = useAccount()

  return useMemo(
    () => ({
      account: address,
      chainId: chainId
    }),
    [address, chainId]
  )
}
