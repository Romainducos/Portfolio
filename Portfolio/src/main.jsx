import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Accueil from './components/Accueil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accueil />
  </StrictMode>,
)
