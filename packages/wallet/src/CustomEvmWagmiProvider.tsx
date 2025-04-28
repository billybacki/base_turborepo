'use client'
import React from 'react'
import { EvmWalletProvider } from './EvmWalletContent'
import Updater from './hooks/transactions/updater'

export function CustomEvmWagmiProvider({
  supportedChainIds,
  showTransactionNotification,
  env,
  children
}: {
  supportedChainIds: number[]
  children: React.ReactNode
  showTransactionNotification?: boolean
  env?: 'prod' | 'testnet' | 'dev'
}) {
  return (
    <EvmWalletProvider
      supportedChainIds={supportedChainIds}
      showTransactionNotification={showTransactionNotification}
      env={env}
    >
      <Updater />
      {children}
    </EvmWalletProvider>
  )
}
