'use client'
import { PaletteMode, createTheme } from '@mui/material'

const lightPalette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0'
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2'
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5'
  }
}

const darkPalette = {
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5'
  },
  secondary: {
    main: '#ce93d8',
    light: '#f3e5f5',
    dark: '#ab47bc'
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e'
  },
  mode: 'dark' as PaletteMode
}

export const lightTheme = createTheme({
  palette: lightPalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})

export const darkTheme = createTheme({
  palette: darkPalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})
