import { ThemeProvider } from '@mui/material'
import { defaultTheme } from './theme'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { DialogProvider, NotificationProvider, TransactionModal } from '.'

export type MuiThemeProviderProps = {
  children: React.ReactNode
  isAppRouter?: boolean
  disableCssBaseline?: boolean
  standalone?: boolean
}

export function MuiThemeProvider({
  children,
  isAppRouter = false,
  disableCssBaseline = false,
  standalone = true
}: MuiThemeProviderProps) {
  const content = (
    <>
      {!disableCssBaseline && <CssBaseline />}
      <DialogProvider>
        <TransactionModal />
        <NotificationProvider>{children}</NotificationProvider>
      </DialogProvider>
    </>
  )

  if (!standalone) {
    return content
  }

  if (isAppRouter) {
    return (
      <AppRouterCacheProvider>
        <ThemeProvider theme={defaultTheme}>{content}</ThemeProvider>
      </AppRouterCacheProvider>
    )
  }

  return <ThemeProvider theme={defaultTheme}>{content}</ThemeProvider>
}
