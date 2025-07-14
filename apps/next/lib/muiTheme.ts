import { TinyColor } from '@ctrl/tinycolor'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// 设计师提供的基础颜色（亮色模式）
export const designerTokens = {
  light: {
    primary: '#3B82F6', // Blue
    secondary: '#6366F1', // Indigo
    success: '#10B981', // Emerald
    warning: '#F59E0B', // Amber
    error: '#EF4444', // Red
    info: '#06B6D4', // Cyan
    grey: '#6B7280', // Gray
    // 🎨 自定义颜色示例
    brand: '#8B5CF6', // Purple - 品牌色
    accent: '#F97316', // Orange - 强调色
    neutral: '#64748B' // Slate - 中性色
  },
  // 暗色模式使用更亮、对比度更好的颜色
  dark: {
    primary: '#60A5FA', // Lighter blue for dark mode
    secondary: '#818CF8', // Lighter indigo
    success: '#34D399', // Lighter emerald
    warning: '#FBBF24', // Lighter amber
    error: '#F87171', // Lighter red
    info: '#22D3EE', // Lighter cyan
    grey: '#9CA3AF', // Lighter gray
    // 🎨 暗色模式下的自定义颜色
    brand: '#A78BFA', // Lighter purple
    accent: '#FB923C', // Lighter orange
    neutral: '#94A3B8' // Lighter slate
  }
} as const

// 生成色阶的工具函数
function generateColorScale(baseColor: string) {
  const color = new TinyColor(baseColor)

  return {
    50: color.mix('#ffffff', 95).toHexString(),
    100: color.mix('#ffffff', 90).toHexString(),
    200: color.mix('#ffffff', 75).toHexString(),
    300: color.mix('#ffffff', 60).toHexString(),
    400: color.mix('#ffffff', 30).toHexString(),
    500: baseColor, // 基础色
    600: color.darken(10).toHexString(),
    700: color.darken(20).toHexString(),
    800: color.darken(30).toHexString(),
    900: color.darken(40).toHexString(),
    950: color.darken(50).toHexString()
  }
}

// 创建亮色模式调色板
const createLightPalette = () => ({
  primary: {
    ...generateColorScale(designerTokens.light.primary),
    main: designerTokens.light.primary
  },
  secondary: {
    ...generateColorScale(designerTokens.light.secondary),
    main: designerTokens.light.secondary
  },
  success: {
    ...generateColorScale(designerTokens.light.success),
    main: designerTokens.light.success
  },
  warning: {
    ...generateColorScale(designerTokens.light.warning),
    main: designerTokens.light.warning
  },
  error: {
    ...generateColorScale(designerTokens.light.error),
    main: designerTokens.light.error
  },
  info: {
    ...generateColorScale(designerTokens.light.info),
    main: designerTokens.light.info
  },
  grey: generateColorScale(designerTokens.light.grey),
  // 🎨 自定义颜色
  brand: {
    ...generateColorScale(designerTokens.light.brand),
    main: designerTokens.light.brand
  },
  accent: {
    ...generateColorScale(designerTokens.light.accent),
    main: designerTokens.light.accent
  },
  neutral: {
    ...generateColorScale(designerTokens.light.neutral),
    main: designerTokens.light.neutral
  }
})

// 创建暗色模式调色板
const createDarkPalette = () => ({
  primary: {
    ...generateColorScale(designerTokens.dark.primary),
    main: designerTokens.dark.primary
  },
  secondary: {
    ...generateColorScale(designerTokens.dark.secondary),
    main: designerTokens.dark.secondary
  },
  success: {
    ...generateColorScale(designerTokens.dark.success),
    main: designerTokens.dark.success
  },
  warning: {
    ...generateColorScale(designerTokens.dark.warning),
    main: designerTokens.dark.warning
  },
  error: {
    ...generateColorScale(designerTokens.dark.error),
    main: designerTokens.dark.error
  },
  info: {
    ...generateColorScale(designerTokens.dark.info),
    main: designerTokens.dark.info
  },
  grey: generateColorScale(designerTokens.dark.grey),
  // 🎨 暗色模式下的自定义颜色
  brand: {
    ...generateColorScale(designerTokens.dark.brand),
    main: designerTokens.dark.brand
  },
  accent: {
    ...generateColorScale(designerTokens.dark.accent),
    main: designerTokens.dark.accent
  },
  neutral: {
    ...generateColorScale(designerTokens.dark.neutral),
    main: designerTokens.dark.neutral
  }
})

// 创建 MUI 主题（使用 extendTheme 支持 CSS 变量）
export const muiTheme = extendTheme({
  // CSS 变量前缀
  cssVarPrefix: 'mui',

  // 定义颜色调色板，MUI 会自动生成 CSS 变量
  colorSchemes: {
    light: {
      palette: {
        ...createLightPalette(),
        // 亮色模式背景设置
        background: {
          default: '#ffffff',
          paper: '#ffffff'
        },
        text: {
          primary: '#1f2937',
          secondary: '#6b7280'
        }
      }
    },
    dark: {
      palette: {
        ...createDarkPalette(),
        // 暗色模式背景设置
        background: {
          default: '#0f172a',
          paper: '#1e293b'
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#cbd5e1'
        }
      }
    }
  },

  // 组件样式覆盖
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '14px',
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid',
          borderColor: 'var(--mui-palette-grey-200)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  },

  // 字体配置
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6
    }
  }
})

// 导出类型定义
export type CustomTheme = typeof muiTheme

// 🎨 TypeScript 类型扩展（添加自定义颜色类型）
declare module '@mui/material/styles' {
  interface Palette {
    brand: Palette['primary']
    accent: Palette['primary']
    neutral: Palette['primary']
  }

  interface PaletteOptions {
    brand?: PaletteOptions['primary']
    accent?: PaletteOptions['primary']
    neutral?: PaletteOptions['primary']
  }
}
