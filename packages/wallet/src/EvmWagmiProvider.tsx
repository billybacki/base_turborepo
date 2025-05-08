'use client'
import { ResolvedRegister, WagmiProvider } from 'wagmi'
import React, { createContext, useContext } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Updater from './evm/hooks/transactions/updater'
import { RootProvider } from '@repo/ui-kit'

interface EvmWalletContextType {
  showTransactionNotification: boolean
}

const EvmWalletContext = createContext<EvmWalletContextType>({
  showTransactionNotification: true
})

export const useEvmWalletContext = () => {
  const context = useContext(EvmWalletContext)
  if (!context) {
    throw new Error('useEvmWalletContext must be used within a EvmWalletProvider')
  }
  return context
}

const queryClient = new QueryClient()

export function EvmWagmiProvider({
  wagmiConfig,
  showTransactionNotification,
  children,
  mode
}: {
  wagmiConfig: ResolvedRegister['config']
  children: React.ReactNode
  showTransactionNotification?: boolean
  mode?: 'light' | 'dark'
}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <EvmWalletContext.Provider
          value={{
            showTransactionNotification: showTransactionNotification ?? true
          }}
        >
          <RootProvider mode={mode}>
            <Updater />
            {children}
          </RootProvider>
        </EvmWalletContext.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
