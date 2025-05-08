import { ReactNode } from 'react'
import { ProviderComposer, ProviderProps } from './ProviderComposer'
import { ThemeProvider, ThemeProviderProps } from './ThemeProvider'
import { DialogProvider } from '../components/Dialog/DialogProvider'
import { NotificationProvider } from '../components/Notification/provider'
import { TransactionModal } from '../components/Dialog/TransactionModal'

export interface RootProviderProps extends Omit<ThemeProviderProps, 'children'> {
  children: ReactNode
  providers?: ProviderProps[]
}

export const RootProvider = ({ children, providers = [], ...themeProps }: RootProviderProps) => {
  const defaultProviders: ProviderProps[] = [{ Provider: DialogProvider }, { Provider: NotificationProvider }]

  const allProviders = [...defaultProviders, ...providers]

  return (
    <ThemeProvider {...themeProps}>
      <ProviderComposer providers={allProviders}>
        <TransactionModal />
        {children}
      </ProviderComposer>
    </ThemeProvider>
  )
}
