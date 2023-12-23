import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import  './i18n/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
          minWidth: '150px',
          maxWidth: '250px',
          width: '100%',
        },
      }}
    />
  </BrowserRouter>
)
