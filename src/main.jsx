import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './contexts/ThemeContextProvider.jsx'
import { Toaster } from 'react-hot-toast'
import CartContextProvider from './contexts/CartContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CartContextProvider>
        <Toaster position="top-center" />
        <App />
      </CartContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
