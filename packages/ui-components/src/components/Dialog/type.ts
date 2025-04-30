import { SxProps, Theme } from '@mui/material/styles'
import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog'

export interface DialogState {
  [key: string]: {
    open: boolean
    propsObject?: any
  }
}

export type TransactionModalProps = {
  title: string
  subTitle?: string
  link?: string
  status: 'pending' | 'success' | 'error'
  retryFunc?: () => void
  onClose?: () => void
  onSuccessClose?: () => void
}

export interface BaseDialogProps extends Omit<MuiDialogProps, 'open'> {
  open: boolean
  onClose?: () => void
  children: React.ReactNode
  title?: string
  close?: boolean
  disableBackClick?: boolean
  minWidth?: string
  width?: string
  hiddenTitle?: boolean
  closeIcon?: React.ReactNode
  headerEl?: React.ReactNode
  sx?: SxProps<Theme>
  bottomChildren?: React.ReactNode
}
