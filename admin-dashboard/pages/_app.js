import React from 'react'
import '@/styles/globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import Admin from '@/layouts/Admin.js'

export default function App({ Component, pageProps }) {
  return <React.Fragment>
    <AuthContextProvider>
      <Admin>
        <Component {...pageProps} />
      </Admin>
    </AuthContextProvider>
  </React.Fragment>
}