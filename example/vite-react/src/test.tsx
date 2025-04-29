'use client'

import { useAppKit, useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import { useApproveCallback, useToken } from '@repo/wallet'
import { CurrencyAmount } from '@repo/currency'

export default function Test() {
  const { open } = useAppKit()
  const { address } = useAppKitAccount()
  const { disconnect } = useDisconnect()

  const { token } = useToken('0x85eDB7A0cbAcf5BD641e0FF5D6270bEf9C72Bd6B', 11155111)

  const { approveWithModal } = useApproveCallback(
    token ? new CurrencyAmount(token, 3) : undefined,
    '0x1F072FD6DeE1ABD06CD97eBbADB0E0c4027E252d',
    true
  )

  return !address ? (
    <div className="flex justify-center">
      <button onClick={() => open()}>Connect</button>
    </div>
  ) : (
    <div className="flex flex-col gap-2">
      <p>{address}</p>
      <div className="flex justify-center">
        <button className="p-2 bg-primary text-white rounded-md" onClick={() => approveWithModal()}>
          Approve
        </button>
      </div>
      <div className="flex justify-center">
        <button className="p-2 bg-primary text-white rounded-md" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    </div>
  )
}
