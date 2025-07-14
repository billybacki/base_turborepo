# 主题系统使用指南

## 概述

本项目实现了 **Tailwind CSS + Material-UI v5** 的统一主题系统，提供了从设计师提供的基础色彩自动生成完整颜色体系的解决方案。

## 架构设计

### 📋 设计师职责

- 提供品牌主色 (Primary)
- 提供语义色彩 (Success, Warning, Error)
- 提供UI基础色 (Background, Surface, Border, Text)

### 🔧 开发者职责

- 使用工具库生成色阶 (50-950)
- 生成状态变体 (Hover, Active, Disabled)
- 配置Tailwind和MUI主题

## 颜色体系

### 基础色彩定义

```typescript
// lib/colorUtils.ts
export const designerTokens = {
  // 品牌色 - 设计师提供
  primary: '#3b82f6', // 蓝色主品牌色
  secondary: '#6366f1', // 紫色辅助色

  // 语义色 - 设计师提供
  success: '#10b981', // 绿色
  warning: '#f59e0b', // 橙色
  error: '#ef4444', // 红色

  // UI基础色 - 设计师提供
  background: '#ffffff',
  surface: '#f8fafc',
  border: '#e2e8f0',
  text: '#1e293b',
  textSecondary: '#64748b'
}
```

### 自动生成的色阶

每个基础色会自动生成完整的色阶：

- `50` - 最浅色
- `100-400` - 浅色系
- `500` - 基础色（设计师提供）
- `600-900` - 深色系
- `950` - 最深色

## 使用方法

### 1. Tailwind CSS 类名

```jsx
// 背景色
<div className="bg-primary-500">主色背景</div>
<div className="bg-success-100">浅绿色背景</div>

// 文本色
<p className="text-primary-600">主色文本</p>
<p className="text-error-500">错误文本</p>

// 边框色
<div className="border border-primary-300">边框</div>

// 预定义按钮类
<button className="btn-primary">主要按钮</button>
<button className="btn-outline">轮廓按钮</button>
<button className="btn-ghost">幽灵按钮</button>

// 渐变背景
<div className="bg-gradient-primary">主色渐变</div>
```

### 2. Material-UI 组件

```jsx
import { Button, TextField, Chip } from '@mui/material'

// MUI 组件会自动使用统一的主题
<Button variant="contained" color="primary">
  主要按钮
</Button>

<TextField
  label="输入框"
  variant="outlined"
  color="primary"
/>

<Chip label="标签" color="success" />
```

### 3. 主题切换

```jsx
import { ThemeToggle, useTheme } from '@/components/ThemeProvider'

function MyComponent() {
  const { mode, toggleMode, colors } = useTheme()

  return (
    <div>
      <p>当前模式: {mode}</p>
      <ThemeToggle />
      <button onClick={toggleMode}>切换主题</button>
    </div>
  )
}
```

### 4. 自定义组件样式

```jsx
// 使用 @apply 指令
<div className="card">
  <h2 className="text-gradient-primary">标题</h2>
  <p>内容</p>
</div>

// 使用 Tailwind 类组合
<button className="
  px-4 py-2 rounded-lg font-medium
  bg-primary-500 text-white
  hover:bg-primary-600
  active:bg-primary-700
  focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
">
  自定义按钮
</button>
```

## 主题定制

### 修改基础色彩

```typescript
// lib/colorUtils.ts
export const designerTokens = {
  primary: '#your-brand-color' // 修改这里
  // ... 其他颜色
}
```

### 添加新的语义色

```typescript
// 1. 在 designerTokens 中添加
export const designerTokens = {
  // ... 现有颜色
  info: '#3b82f6',      // 新增信息色
}

// 2. 在 generateTheme 函数中添加
static generateTheme(designerColors: {
  // ... 现有类型
  info?: string;        // 新增类型
}) {
  const theme = {
    // ... 现有生成
    info: this.generateScale(designerColors.info || '#3b82f6'),
  }
}

// 3. 在 Tailwind 配置中添加
// tailwind.config.ts
colors: {
  // ... 现有颜色
  info: {
    50: colorTheme.info[50],
    // ... 完整色阶
  }
}
```

### 调整色阶生成算法

```typescript
// lib/colorUtils.ts
static generateScale(baseColor: string) {
  const color = new TinyColor(baseColor)
  const hsl = color.toHsl()

  return {
    // 调整这些数值来改变色阶生成逻辑
    50: new TinyColor({ h: hsl.h, s: hsl.s, l: Math.min(0.95, hsl.l + 0.45) }).toHexString(),
    // ...
  }
}
```

## 最佳实践

### ✅ 推荐做法

1. **优先使用预定义的色阶**：`bg-primary-500` 而不是自定义颜色
2. **保持语义化命名**：使用 `text-error-500` 而不是 `text-red-500`
3. **利用状态变体**：`hover:bg-primary-600` 等
4. **使用预定义组件类**：`.btn-primary`, `.card` 等
5. **遵循无障碍标准**：确保颜色对比度符合要求

### ❌ 避免做法

1. **硬编码颜色值**：避免 `bg-[#3b82f6]`
2. **绕过主题系统**：避免直接使用十六进制颜色
3. **过度自定义**：保持设计系统的一致性
4. **忽略暗色模式**：确保组件在两种模式下都正常显示

## 调试和开发

### 查看生成的颜色

```typescript
import { colorTheme, colorStates } from '@/lib/colorUtils'

console.log('Primary 色阶:', colorTheme.primary)
console.log('Primary 状态:', colorStates.primary)
```

### 测试主题切换

访问 `/` 页面查看完整的主题演示，包括：

- 完整色阶展示
- Tailwind 组件示例
- Material-UI 组件示例
- 主题切换功能

### 性能优化

1. **CSS 变量优化**：使用 RGB 值存储，支持透明度
2. **按需加载**：只引入使用的颜色
3. **编译时优化**：Tailwind 会移除未使用的样式

## 扩展功能

### 支持多品牌主题

```typescript
// 定义多个主题
const themes = {
  default: { primary: '#3b82f6', ... },
  brand2: { primary: '#dc2626', ... },
}

// 动态切换
function switchBrand(themeName: string) {
  const theme = themes[themeName]
  ColorUtils.generateTheme(theme)
}
```

### 集成设计令牌工具

```bash
# 安装 Style Dictionary
pnpm install style-dictionary

# 从 Figma Tokens 同步
# 使用 Figma Tokens 插件导出设计令牌
```

## 故障排除

### 常见问题

1. **颜色不显示**

   - 检查 Tailwind 配置是否正确导入 colorTheme
   - 确保 CSS 变量已正确定义

2. **MUI 组件样式异常**

   - 检查 ThemeProvider 是否正确包裹应用
   - 确认 MUI 主题配置正确

3. **暗色模式不工作**
   - 检查 CSS 变量在暗色模式下的定义
   - 确认 data-theme 属性正确设置

### 开发工具

- 使用浏览器开发者工具查看 CSS 变量
- 使用 Tailwind IntelliSense 插件获得智能提示
- 使用 Material-UI 开发者工具检查主题

## 总结

这套主题系统实现了设计与开发的高效协作：

- **设计师专注创意**：只需提供核心颜色
- **开发者专注技术**：自动生成完整体系
- **保持一致性**：Tailwind 和 MUI 共享主题
- **易于维护**：修改基础色即可更新全局

通过这种方式，我们既保持了设计的灵活性，又确保了技术实现的一致性和可维护性。
