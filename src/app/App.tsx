import { FC, Suspense } from 'react'
import { MainPage } from '@/pages/MainPage'

const App: FC = () => {
  return (
    <Suspense fallback="">
      <MainPage />
    </Suspense>
  )
}

export default App
