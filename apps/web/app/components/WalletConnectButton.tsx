'use client'
import { useEvmWallet, useRainbowkitModal } from '@repo/wallet'

export function WalletConnectButton() {
  const { useConnectModal } = useRainbowkitModal()
  const { openConnectModal } = useConnectModal()
  const { account } = useEvmWallet()

  return account ? <button>{account}</button> : <button onClick={() => openConnectModal?.()}>Connect</button>
}
