import { ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from './MuiTheme'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { DialogProvider, NotificationProvider, TransactionModal } from '.'

export type UiThemeProviderProps = {
  children: React.ReactNode
  isAppRouter?: boolean
  disableCssBaseline?: boolean
  theme?: 'light' | 'dark'
}

export function UiThemeProvider({
  children,
  isAppRouter = false,
  disableCssBaseline = true,
  theme = 'light'
}: UiThemeProviderProps) {
  const content = (
    <>
      {!disableCssBaseline && <CssBaseline />}
      <DialogProvider>
        <TransactionModal />
        <NotificationProvider>{children}</NotificationProvider>
      </DialogProvider>
    </>
  )

  if (isAppRouter) {
    return (
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{content}</ThemeProvider>
      </AppRouterCacheProvider>
    )
  }

  return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>{content}</ThemeProvider>
}
