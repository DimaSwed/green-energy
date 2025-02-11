import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './app/providers/provider-store.tsx'
import { ThemeWrapper } from './app/providers/provider-theme.tsx'
import './app/styles/reset.sass'
import App from './app/App.tsx'
import '@/shared/config/i18n/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
)
