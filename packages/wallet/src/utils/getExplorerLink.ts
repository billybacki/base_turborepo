interface ExplorerInfo {
  name: string
  type: 'evm' | 'solana' | 'sui'
  chainId?: number
  network?: 'mainnet' | 'testnet' | 'devnet'
  explorerUrl: string
}

const explorerList: ExplorerInfo[] = [
  { name: 'Ethereum', type: 'evm', chainId: 1, explorerUrl: 'https://etherscan.io' },
  { name: 'BNB Chain', type: 'evm', chainId: 56, explorerUrl: 'https://bscscan.com' },
  { name: 'Base', type: 'evm', chainId: 8453, explorerUrl: 'https://basescan.org' },
  { name: 'Sepolia', type: 'evm', chainId: 11155111, explorerUrl: 'https://sepolia.etherscan.io' },
  { name: 'Linea Sepolia', type: 'evm', chainId: 59141, explorerUrl: 'https://sepolia.lineascan.build' },
  { name: 'Bouncebit', type: 'evm', chainId: 6001, explorerUrl: 'https://bbscan.io' },
  { name: 'Polygon', type: 'evm', chainId: 137, explorerUrl: 'https://polygonscan.com' },
  { name: 'Arbitrum', type: 'evm', chainId: 42161, explorerUrl: 'https://arbiscan.io' },
  { name: 'Optimism', type: 'evm', chainId: 10, explorerUrl: 'https://optimistic.etherscan.io' },
  { name: 'BSC Testnet', type: 'evm', chainId: 97, explorerUrl: 'https://testnet.bscscan.com' },
  {
    name: 'Polygon Mumbai',
    type: 'evm',
    chainId: 80001,
    explorerUrl: 'https://mumbai.polygonscan.com'
  },
  // Solana
  { name: 'Solana Mainnet', type: 'solana', network: 'mainnet', explorerUrl: 'https://solscan.io' },
  {
    name: 'Solana Testnet',
    type: 'solana',
    network: 'testnet',
    explorerUrl: 'https://solscan.io?cluster=testnet'
  },
  {
    name: 'Solana Testnet',
    type: 'solana',
    network: 'devnet',
    explorerUrl: 'https://solscan.io?cluster=devnet'
  },
  // Sui
  { name: 'Sui Mainnet', type: 'sui', network: 'mainnet', explorerUrl: 'https://explorer.sui.io' },
  { name: 'Sui Testnet', type: 'sui', network: 'testnet', explorerUrl: 'https://explorer.sui.io?network=testnet' }
]

export type ExplorerDataType = 'transaction' | 'token' | 'address' | 'block'

function getExplorerInfo(params: {
  chainId?: number
  type: 'evm' | 'solana' | 'sui'
  network?: 'mainnet' | 'testnet' | 'devnet'
}): ExplorerInfo | undefined {
  if (params.type === 'evm') {
    return explorerList.find(item => item.type === 'evm' && item.chainId === params.chainId)
  }
  const network = params.network || 'mainnet'
  return explorerList.find(item => item.type === params.type && item.network === network)
}

export function getExplorerLink(
  chainKey: { chainId?: number; type: 'evm' | 'solana' | 'sui'; network?: 'mainnet' | 'testnet' | 'devnet' },
  data: string,
  dataType: ExplorerDataType
): string {
  const info = getExplorerInfo(chainKey)
  if (!info) throw new Error('Explorer info not found')
  const base = info.explorerUrl.replace(/\/$/, '')

  switch (info.type) {
    case 'evm': {
      if (!chainKey.chainId) throw new Error('Chain ID is required')
      switch (dataType) {
        case 'transaction':
          return `${base}/tx/${data}`
        case 'token':
          if (chainKey.chainId === 1666600000) {
            // Harmony
            return `${base}/address/${data}`
          }
          if (chainKey.chainId === 66) {
            // OKEx
            return `${base}/tokenAddr/${data}`
          }
          if ([100, 43114, 1285, 122, 1284, 2222].includes(chainKey.chainId)) {
            // Blockscout
            return `${base}/tokens/${data}`
          }
          if (chainKey.chainId === 40) {
            // Telos
            return `${base}/address/${data}`
          }
          return `${base}/token/${data}`
        case 'address':
          return `${base}/address/${data}`
        case 'block':
          if (chainKey.chainId === 40) {
            // Telos
            return `${base}/block/${data}`
          }
          return `${base}/block/${data}`
        default:
          return base
      }
    }
    case 'solana': {
      switch (dataType) {
        case 'transaction':
          return `${base}/tx/${data}${info.network === 'testnet' ? '?cluster=testnet' : ''}`
        case 'address':
          return `${base}/address/${data}${info.network === 'testnet' ? '?cluster=testnet' : ''}`
        case 'block':
          return `${base}/block/${data}${info.network === 'testnet' ? '?cluster=testnet' : ''}`
        default:
          return base
      }
    }
    case 'sui': {
      switch (dataType) {
        case 'transaction':
          return `${base}/txblock/${data}${info.network === 'testnet' ? '?network=testnet' : ''}`
        case 'address':
          return `${base}/address/${data}${info.network === 'testnet' ? '?network=testnet' : ''}`
        case 'block':
          return `${base}/checkpoint/${data}${info.network === 'testnet' ? '?network=testnet' : ''}`
        default:
          return base
      }
    }
    default:
      return base
  }
}
