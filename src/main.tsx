import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { initMuiProLicense } from '../lib'

initMuiProLicense(import.meta.env.VITE_MUI_PRO_KEY)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
