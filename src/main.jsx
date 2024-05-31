import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { router } from './components/Routes/Routes.jsx'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <div className="mx-auto">
    <ToastContainer />
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
