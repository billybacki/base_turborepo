import React from 'react'
import { useDialog } from '../components/Dialog/DialogProvider'
import { TransactionModalProps } from '../components/Dialog/type'

export function useDialogState<T = any>(dialogId?: string) {
  const [dialogIdByUse] = React.useState(dialogId || Math.random().toString(36).substring(2, 15))
  const { openDialog, closeDialog, state } = useDialog()

  return {
    open: (propsObject?: T) => openDialog(dialogIdByUse, propsObject),
    close: () => closeDialog(dialogIdByUse),
    isOpen: Boolean(state[dialogIdByUse]?.open),
    propsObject: state[dialogIdByUse]?.propsObject as T
  }
}

export function useTransactionModal() {
  const { open, close, isOpen, propsObject } = useDialogState<TransactionModalProps>('transactionModal')
  return {
    open,
    close,
    propsObject,
    isOpen
  }
}
