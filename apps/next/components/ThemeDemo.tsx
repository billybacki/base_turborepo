'use client'

import React from 'react'
import {
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Grid,
  Paper,
  useColorScheme,
  Chip,
  Avatar,
  Switch,
  FormControlLabel,
  Alert,
  LinearProgress,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge,
  Tooltip
} from '@mui/material'

export function ThemeDemo() {
  const { mode, setMode } = useColorScheme()

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const colors = [
    { name: 'Primary', key: 'primary', description: '主要品牌色，用于重要按钮和链接' },
    { name: 'Secondary', key: 'secondary', description: '次要色彩，用于辅助元素' },
    { name: 'Success', key: 'success', description: '成功状态色，表示完成和成功' },
    { name: 'Warning', key: 'warning', description: '警告色，表示需要注意的信息' },
    { name: 'Error', key: 'error', description: '错误色，表示错误和危险操作' },
    { name: 'Info', key: 'info', description: '信息色，用于中性提示信息' },
    { name: 'Brand', key: 'brand', description: '品牌色，体现公司独特的品牌标识' },
    { name: 'Accent', key: 'accent', description: '强调色，用于突出特殊内容' },
    { name: 'Neutral', key: 'neutral', description: '中性色，用于背景和分割元素' }
  ]

  const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', transition: 'all 0.3s ease' }}>
      {/* 顶部导航栏 */}
      <Paper
        className="fixed top-0 left-0 right-0 z-50"
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
              🎨 MUI + Tailwind 主题系统
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              完美集成的现代前端主题解决方案
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip label={`${mode === 'light' ? '亮色' : '暗色'}模式`} color="primary" variant="outlined" size="small" />
            <Tooltip title={`切换到${mode === 'light' ? '暗色' : '亮色'}模式`}>
              <IconButton onClick={toggleMode} size="large" color="primary">
                {mode === 'light' ? '🌙' : '☀️'}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>

      <Box sx={{ p: 4, pt: 20 }}>
        {/* 主要特性介绍 */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'primary.main' }}>
                  🚀 单一配置源
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  只需在 <code>lib/muiTheme.ts</code> 中配置基础颜色，系统自动生成完整色阶和 CSS 变量
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'success.main' }}>
                  🎯 完美适配
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  MUI 和 Tailwind 共享同一套颜色系统，确保设计一致性和开发效率
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 2, color: 'warning.main' }}>
                  🌙 智能主题
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  支持亮色/暗色模式无缝切换，暗色模式使用优化的颜色以确保更好的视觉体验
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* MUI 组件演示区域 */}
        <Paper sx={{ p: 4, mb: 6, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
            Material-UI 组件展示
          </Typography>

          {/* 按钮组 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              按钮组件
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <Button variant="contained" color="primary">
                ❤️ Primary
              </Button>
              <Button variant="contained" color="secondary">
                ⭐ Secondary
              </Button>
              <Button variant="contained" color="success">
                ✅ Success
              </Button>
              <Button variant="contained" color="warning">
                ⚠️ Warning
              </Button>
              <Button variant="contained" color="error">
                ❌ Error
              </Button>
              <Button variant="contained" color="info">
                ℹ️ Info
              </Button>
              {/* 🎨 自定义颜色按钮 */}
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'brand.main',
                  '&:hover': { bgcolor: 'brand.dark' }
                }}
              >
                🎨 Brand
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: 'accent.main',
                  borderColor: 'accent.main',
                  '&:hover': {
                    bgcolor: 'accent.50',
                    borderColor: 'accent.600'
                  }
                }}
              >
                🔥 Accent
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <Button variant="outlined" color="primary">
                Outlined
              </Button>
              <Button variant="text" color="secondary">
                Text Button
              </Button>
              <Button variant="contained" disabled>
                Disabled
              </Button>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* 表单组件 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              表单组件
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField label="邮箱地址" variant="outlined" fullWidth type="email" placeholder="请输入邮箱" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="搜索内容" variant="outlined" fullWidth placeholder="搜索..." />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* 其他组件 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              其他组件
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap', alignItems: 'center' }}>
              <Chip label="默认标签" />
              <Chip label="Primary" color="primary" />
              <Chip label="Success" color="success" />
              <Chip label="可删除" color="secondary" onDelete={() => {}} />

              <Badge badgeContent={4} color="error">
                <span style={{ fontSize: '24px' }}>🔔</span>
              </Badge>

              <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel control={<Switch defaultChecked color="primary" />} label="启用通知" />
              <FormControlLabel control={<Switch color="success" />} label="自动保存" />
            </Box>

            <Alert severity="success" sx={{ mb: 2 }}>
              这是一条成功消息！主题系统配置完成。
            </Alert>
            <Alert severity="warning" sx={{ mb: 2 }}>
              请注意：暗色模式下的颜色已经过优化调整。
            </Alert>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                加载进度
              </Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mb: 1 }} />
              <LinearProgress color="secondary" />
            </Box>
          </Box>
        </Paper>

        {/* Tailwind 组件演示区域 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg mb-8 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tailwind CSS 组件展示</h2>

          {/* Tailwind 按钮 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">按钮样式</h3>
            <div className="flex gap-4 mb-4 flex-wrap">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-outline">Outline Button</button>
              <button className="btn-ghost">Ghost Button</button>
            </div>
          </div>

          {/* Tailwind 卡片 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">卡片布局</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary">快速开发</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">使用统一的颜色系统，提高开发效率</p>
              </div>

              <div className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">✨</span>
                  </div>
                  <h4 className="text-lg font-semibold text-success">设计一致</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">确保 MUI 和 Tailwind 的视觉统一性</p>
              </div>

              <div className="card group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-warning rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <h4 className="text-lg font-semibold text-warning">高性能</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">CSS 变量确保运行时性能最优</p>
              </div>
            </div>
          </div>

          {/* 渐变展示 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">渐变效果</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-primary text-white p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Primary 渐变</h4>
                <p className="opacity-90">优雅的主色调渐变效果</p>
              </div>
              <div className="bg-gradient-success text-white p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Success 渐变</h4>
                <p className="opacity-90">清新的成功色渐变效果</p>
              </div>
            </div>
          </div>

          {/* 表单样式 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">表单元素</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Tailwind 输入框" />
              <input className="input" placeholder="带样式的输入框" />
            </div>
          </div>

          {/* 🎨 自定义颜色演示 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">自定义颜色演示</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-brand text-white p-4 rounded-xl text-center">
                <h4 className="font-semibold mb-2">品牌色 (Brand)</h4>
                <p className="text-sm opacity-90">体现公司独特标识</p>
              </div>
              <div className="bg-accent text-white p-4 rounded-xl text-center">
                <h4 className="font-semibold mb-2">强调色 (Accent)</h4>
                <p className="text-sm opacity-90">突出特殊内容</p>
              </div>
              <div className="bg-neutral text-white p-4 rounded-xl text-center">
                <h4 className="font-semibold mb-2">中性色 (Neutral)</h4>
                <p className="text-sm opacity-90">背景和分割元素</p>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-brand-100 text-brand-800 rounded-lg text-sm font-medium">bg-brand-100</span>
              <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-lg text-sm font-medium">
                bg-accent-100
              </span>
              <span className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-lg text-sm font-medium">
                bg-neutral-100
              </span>
              <span className="px-3 py-1 border border-brand text-brand rounded-lg text-sm font-medium">
                border-brand
              </span>
            </div>
          </div>
        </div>

        {/* 颜色调色板展示 */}
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
            完整颜色调色板
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            以下颜色由 MUI 基于基础色自动生成，支持亮色和暗色模式，可在 Tailwind 中直接使用对应的类名。
          </Typography>

          <Grid container spacing={4}>
            {colors.map(({ name, key, description }) => (
              <Grid item xs={12} lg={6} key={key}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    {description}
                  </Typography>

                  {/* 色阶展示 */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
                      gap: 1,
                      mb: 3
                    }}
                  >
                    {colorShades.map(shade => (
                      <Tooltip key={shade} title={`${key}-${shade}`}>
                        <Box
                          sx={{
                            height: 50,
                            backgroundColor: `${key}.${shade}`,
                            borderRadius: 1,
                            border: '1px solid',
                            borderColor: 'grey.300',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.1s',
                            '&:hover': {
                              transform: 'scale(1.05)'
                            }
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: shade > 500 ? 'white' : 'black',
                              fontSize: '10px',
                              fontWeight: 600
                            }}
                          >
                            {shade}
                          </Typography>
                        </Box>
                      </Tooltip>
                    ))}
                  </Box>

                  {/* Tailwind 类名示例 */}
                  <Typography variant="body2" gutterBottom sx={{ fontWeight: 600 }}>
                    Tailwind 使用示例：
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <div className={`bg-${key} text-white px-3 py-1 rounded-lg text-sm font-medium`}>bg-{key}</div>
                    <div className={`bg-${key}-100 text-${key}-800 px-3 py-1 rounded-lg text-sm font-medium`}>
                      bg-{key}-100
                    </div>
                    <div className={`bg-${key}-500 text-white px-3 py-1 rounded-lg text-sm font-medium`}>
                      bg-{key}-500
                    </div>
                    <div className={`text-${key} border border-${key} px-3 py-1 rounded-lg text-sm font-medium`}>
                      text-{key}
                    </div>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* 技术说明 */}
        <Paper className="bg-white dark:bg-slate-800" sx={{ p: 4, mt: 6, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            ✨ 技术架构亮点
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="单一配置源" secondary="只需在 lib/muiTheme.ts 中配置基础颜色" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'success.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="自动生成色阶" secondary="MUI 自动生成完整的 50-950 色阶" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'warning.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="CSS 变量导出" secondary="自动生成 CSS 变量供 Tailwind 使用" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'info.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="服务端渲染友好" secondary="避免了构建时依赖问题" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="智能主题切换" secondary="完美支持亮色/暗色模式切换" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="开发体验优化" secondary="统一的设计语言和一致的视觉效果" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  )
}
