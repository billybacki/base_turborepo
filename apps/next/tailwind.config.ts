import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // 使用 MUI 生成的 CSS 变量（基本格式）
        primary: {
          50: 'var(--mui-palette-primary-50)',
          100: 'var(--mui-palette-primary-100)',
          200: 'var(--mui-palette-primary-200)',
          300: 'var(--mui-palette-primary-300)',
          400: 'var(--mui-palette-primary-400)',
          500: 'var(--mui-palette-primary-500)',
          600: 'var(--mui-palette-primary-600)',
          700: 'var(--mui-palette-primary-700)',
          800: 'var(--mui-palette-primary-800)',
          900: 'var(--mui-palette-primary-900)',
          950: 'var(--mui-palette-primary-950)',
          DEFAULT: 'var(--mui-palette-primary-main)'
        },
        secondary: {
          50: 'var(--mui-palette-secondary-50)',
          100: 'var(--mui-palette-secondary-100)',
          200: 'var(--mui-palette-secondary-200)',
          300: 'var(--mui-palette-secondary-300)',
          400: 'var(--mui-palette-secondary-400)',
          500: 'var(--mui-palette-secondary-500)',
          600: 'var(--mui-palette-secondary-600)',
          700: 'var(--mui-palette-secondary-700)',
          800: 'var(--mui-palette-secondary-800)',
          900: 'var(--mui-palette-secondary-900)',
          950: 'var(--mui-palette-secondary-950)',
          DEFAULT: 'var(--mui-palette-secondary-main)'
        },
        success: {
          50: 'var(--mui-palette-success-50)',
          100: 'var(--mui-palette-success-100)',
          200: 'var(--mui-palette-success-200)',
          300: 'var(--mui-palette-success-300)',
          400: 'var(--mui-palette-success-400)',
          500: 'var(--mui-palette-success-500)',
          600: 'var(--mui-palette-success-600)',
          700: 'var(--mui-palette-success-700)',
          800: 'var(--mui-palette-success-800)',
          900: 'var(--mui-palette-success-900)',
          950: 'var(--mui-palette-success-950)',
          DEFAULT: 'var(--mui-palette-success-main)'
        },
        warning: {
          50: 'var(--mui-palette-warning-50)',
          100: 'var(--mui-palette-warning-100)',
          200: 'var(--mui-palette-warning-200)',
          300: 'var(--mui-palette-warning-300)',
          400: 'var(--mui-palette-warning-400)',
          500: 'var(--mui-palette-warning-500)',
          600: 'var(--mui-palette-warning-600)',
          700: 'var(--mui-palette-warning-700)',
          800: 'var(--mui-palette-warning-800)',
          900: 'var(--mui-palette-warning-900)',
          950: 'var(--mui-palette-warning-950)',
          DEFAULT: 'var(--mui-palette-warning-main)'
        },
        error: {
          50: 'var(--mui-palette-error-50)',
          100: 'var(--mui-palette-error-100)',
          200: 'var(--mui-palette-error-200)',
          300: 'var(--mui-palette-error-300)',
          400: 'var(--mui-palette-error-400)',
          500: 'var(--mui-palette-error-500)',
          600: 'var(--mui-palette-error-600)',
          700: 'var(--mui-palette-error-700)',
          800: 'var(--mui-palette-error-800)',
          900: 'var(--mui-palette-error-900)',
          950: 'var(--mui-palette-error-950)',
          DEFAULT: 'var(--mui-palette-error-main)'
        },
        info: {
          50: 'var(--mui-palette-info-50)',
          100: 'var(--mui-palette-info-100)',
          200: 'var(--mui-palette-info-200)',
          300: 'var(--mui-palette-info-300)',
          400: 'var(--mui-palette-info-400)',
          500: 'var(--mui-palette-info-500)',
          600: 'var(--mui-palette-info-600)',
          700: 'var(--mui-palette-info-700)',
          800: 'var(--mui-palette-info-800)',
          900: 'var(--mui-palette-info-900)',
          950: 'var(--mui-palette-info-950)',
          DEFAULT: 'var(--mui-palette-info-main)'
        },
        gray: {
          50: 'var(--mui-palette-grey-50)',
          100: 'var(--mui-palette-grey-100)',
          200: 'var(--mui-palette-grey-200)',
          300: 'var(--mui-palette-grey-300)',
          400: 'var(--mui-palette-grey-400)',
          500: 'var(--mui-palette-grey-500)',
          600: 'var(--mui-palette-grey-600)',
          700: 'var(--mui-palette-grey-700)',
          800: 'var(--mui-palette-grey-800)',
          900: 'var(--mui-palette-grey-900)',
          950: 'var(--mui-palette-grey-950)'
        },
        // 🎨 自定义颜色
        brand: {
          50: 'var(--mui-palette-brand-50)',
          100: 'var(--mui-palette-brand-100)',
          200: 'var(--mui-palette-brand-200)',
          300: 'var(--mui-palette-brand-300)',
          400: 'var(--mui-palette-brand-400)',
          500: 'var(--mui-palette-brand-500)',
          600: 'var(--mui-palette-brand-600)',
          700: 'var(--mui-palette-brand-700)',
          800: 'var(--mui-palette-brand-800)',
          900: 'var(--mui-palette-brand-900)',
          950: 'var(--mui-palette-brand-950)',
          DEFAULT: 'var(--mui-palette-brand-main)'
        },
        accent: {
          50: 'var(--mui-palette-accent-50)',
          100: 'var(--mui-palette-accent-100)',
          200: 'var(--mui-palette-accent-200)',
          300: 'var(--mui-palette-accent-300)',
          400: 'var(--mui-palette-accent-400)',
          500: 'var(--mui-palette-accent-500)',
          600: 'var(--mui-palette-accent-600)',
          700: 'var(--mui-palette-accent-700)',
          800: 'var(--mui-palette-accent-800)',
          900: 'var(--mui-palette-accent-900)',
          950: 'var(--mui-palette-accent-950)',
          DEFAULT: 'var(--mui-palette-accent-main)'
        },
        neutral: {
          50: 'var(--mui-palette-neutral-50)',
          100: 'var(--mui-palette-neutral-100)',
          200: 'var(--mui-palette-neutral-200)',
          300: 'var(--mui-palette-neutral-300)',
          400: 'var(--mui-palette-neutral-400)',
          500: 'var(--mui-palette-neutral-500)',
          600: 'var(--mui-palette-neutral-600)',
          700: 'var(--mui-palette-neutral-700)',
          800: 'var(--mui-palette-neutral-800)',
          900: 'var(--mui-palette-neutral-900)',
          950: 'var(--mui-palette-neutral-950)',
          DEFAULT: 'var(--mui-palette-neutral-main)'
        },
        background: 'var(--mui-palette-background-default)',
        foreground: 'var(--mui-palette-text-primary)'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        medium: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        large: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
}
export default config
