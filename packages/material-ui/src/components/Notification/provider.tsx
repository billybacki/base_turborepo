'use client'
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack'
import { createContext, useCallback, useContext } from 'react'
import React from 'react'
import { SnackbarContent } from './SnackbarContent'

type NotificationOptions = {
  variant?: VariantType
  autoHideDuration?: number
  title?: string
  action?: React.ReactNode
  anchorOrigin?: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
}

type NotificationContextType = {
  notify: (message: string | React.ReactNode, options?: NotificationOptions) => void
  success: (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => void
  error: (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => void
  warning: (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => void
  info: (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => void
  closeAll: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

function ANotificationProvider({ children }: { children: React.ReactNode }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const notify = useCallback(
    (message: string | React.ReactNode, options?: NotificationOptions) => {
      const variant = options?.variant || 'default'
      enqueueSnackbar(message, {
        variant,
        autoHideDuration: options?.autoHideDuration || 3000,
        ...options
      })
    },
    [enqueueSnackbar]
  )

  const success = useCallback(
    (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => {
      notify(message, { ...options, variant: 'success' })
    },
    [notify]
  )

  const error = useCallback(
    (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => {
      notify(message, { ...options, variant: 'error' })
    },
    [notify]
  )

  const warning = useCallback(
    (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => {
      notify(message, { ...options, variant: 'warning' })
    },
    [notify]
  )

  const info = useCallback(
    (message: string | React.ReactNode, options?: Omit<NotificationOptions, 'variant'>) => {
      notify(message, { ...options, variant: 'info' })
    },
    [notify]
  )

  const closeAll = useCallback(() => {
    closeSnackbar()
  }, [closeSnackbar])

  return (
    <NotificationContext.Provider
      value={{
        notify,
        success,
        error,
        warning,
        info,
        closeAll
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      Components={{
        default: SnackbarContent,
        success: SnackbarContent,
        error: SnackbarContent,
        warning: SnackbarContent,
        info: SnackbarContent
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <ANotificationProvider>{children}</ANotificationProvider>
    </SnackbarProvider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}
