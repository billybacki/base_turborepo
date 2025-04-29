'use client'

import { createAppKit } from '@reown/appkit/react'
import { BaseWalletAdapter, SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { AppKitNetwork, base, bsc, mainnet, sepolia, solana } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { cookieStorage, createStorage, http, WagmiProvider, type Config } from 'wagmi'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { EvmWagmiProvider } from '@repo/wallet'

const projectId = 'd5c60d9c3c07bc864e9f891660630ecb'

const transports = {
  [mainnet.id]: http(),
  [bsc.id]: http(),
  [base.id]: http(),
  [sepolia.id]: http()
}

const networks = [mainnet, bsc, base, sepolia, solana]

const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  transports,
  projectId,
  networks: networks as unknown as [AppKitNetwork, ...AppKitNetwork[]]
})

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [
    new PhantomWalletAdapter() as unknown as BaseWalletAdapter<string>,
    new SolflareWalletAdapter() as unknown as BaseWalletAdapter<string>
  ]
})

const metadata = {
  name: 'web3-appkit',
  description: '',
  url: 'https://google.com', // origin must match your domain & subdomain
  icons: ['']
}

createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  networks: networks as unknown as [AppKitNetwork, ...AppKitNetwork[]],
  metadata: metadata,
  projectId,
  themeMode: 'dark',
  features: {
    email: false,
    socials: false,
    analytics: true // Optional - defaults to your Cloud configuration
  },
  // binance、 coinbase wallet id
  featuredWalletIds: [
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
    '8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4',
    '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
  ]
})

const queryClient = new QueryClient()

export function Web3Provider({ children }: { children: JSX.Element }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={undefined}>
      <QueryClientProvider client={queryClient}>
        <EvmWagmiProvider wagmiConfig={wagmiAdapter.wagmiConfig as any} theme={'dark'}>
          {children}
        </EvmWagmiProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

// function Config({ children }: { children: React.ReactNode }) {
//   const config = useConfig()
//   return (
//     <EvmWagmiProvider wagmiConfig={config as any} theme={'dark'}>
//       {children}
//     </EvmWagmiProvider>
//   )
// }
