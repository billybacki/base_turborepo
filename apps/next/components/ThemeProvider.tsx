'use client'

import React from 'react'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { muiTheme } from '../lib/muiTheme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <AppRouterCacheProvider>
      <CssVarsProvider theme={muiTheme} defaultMode="light">
        {children}
      </CssVarsProvider>
    </AppRouterCacheProvider>
  )
}
