'use client'
import { ResolvedRegister, WagmiProvider } from 'wagmi'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CustomEvmWagmiProvider } from './CustomEvmWagmiProvider'

const queryClient = new QueryClient()

export function EvmWagmiProvider({
  wagmiConfig,
  supportedChainIds,
  showTransactionNotification,
  env,
  children
}: {
  wagmiConfig: ResolvedRegister['config']
  supportedChainIds: number[]
  children: React.ReactNode
  showTransactionNotification?: boolean
  env?: 'prod' | 'testnet' | 'dev'
}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <CustomEvmWagmiProvider
          supportedChainIds={supportedChainIds}
          showTransactionNotification={showTransactionNotification}
          env={env}
        >
          {children}
        </CustomEvmWagmiProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
