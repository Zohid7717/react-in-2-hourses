import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './compoments/Router'
import './assets/styles/global.css'
import Home from './compoments/screens/Home/Home'
import AuthProvider from './compoments/providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
