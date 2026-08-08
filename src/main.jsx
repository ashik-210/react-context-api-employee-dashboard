import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CompContent from './components/CompContext.jsx'

createRoot(document.getElementById('root')).render(
  <CompContent>
    <App />
  </CompContent>
)
