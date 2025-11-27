import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { HeaderToggleProvider } from './context/HeaderToggleContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <HeaderToggleProvider>
        <App />
      </HeaderToggleProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
