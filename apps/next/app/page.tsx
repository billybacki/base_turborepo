import { ThemeDemo } from '../components/ThemeDemo'
import Test from './test'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeDemo />

      <div className="p-10">
        <Test />
      </div>
    </div>
  )
}
