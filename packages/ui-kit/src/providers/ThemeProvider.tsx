import { ReactNode, useMemo } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme, lightTheme } from '../themes/MuiTheme'

export interface ThemeProviderProps {
  children: ReactNode
  mode?: 'light' | 'dark'
  withCache?: boolean
  withCssBaseline?: boolean
}

export const ThemeProvider = ({
  children,
  mode = 'light',
  withCache = false,
  withCssBaseline = false
}: ThemeProviderProps) => {
  const themeInstance = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

  const content = (
    <MuiThemeProvider theme={themeInstance}>
      {withCssBaseline && <CssBaseline />}
      {children}
    </MuiThemeProvider>
  )

  if (withCache) {
    return <AppRouterCacheProvider>{content}</AppRouterCacheProvider>
  }

  return content
}
