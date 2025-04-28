import React, { createContext, useContext, ReactNode } from 'react'

interface EvmWalletContextType {
  supportedChainIds: number[]
  showTransactionNotification: boolean
  env: 'prod' | 'testnet' | 'dev'
}

const EvmWalletContext = createContext<EvmWalletContextType>({
  supportedChainIds: [],
  showTransactionNotification: true,
  env: 'prod'
})

export const useEvmWalletContext = () => {
  const context = useContext(EvmWalletContext)
  if (!context) {
    throw new Error('useEvmWalletContext must be used within a EvmWalletProvider')
  }
  return context
}

interface EvmWalletProviderProps {
  children: ReactNode
  supportedChainIds: number[]
  showTransactionNotification?: boolean
  env?: 'prod' | 'testnet' | 'dev'
}

export const EvmWalletProvider = ({
  children,
  supportedChainIds,
  env,
  showTransactionNotification
}: EvmWalletProviderProps) => {
  return (
    <EvmWalletContext.Provider
      value={{
        supportedChainIds,
        showTransactionNotification: showTransactionNotification ?? true,
        env: env ?? 'prod'
      }}
    >
      {children}
    </EvmWalletContext.Provider>
  )
}
