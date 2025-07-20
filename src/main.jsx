import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@components/App'
import CarroProvider from '@context/CarroProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarroProvider>
      <App />
    </CarroProvider>
  </StrictMode>,
)
