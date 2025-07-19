import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecurrenceProvider from './context/RecurrenceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecurrenceProvider>
      <App />
    </RecurrenceProvider>
  </StrictMode>,
)
