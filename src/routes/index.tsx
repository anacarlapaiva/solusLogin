import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../hook/auth'
import Router from './router'

const Route: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthProvider>

                <Router />

            </AuthProvider>
        </BrowserRouter >
    )
}

export default Route;

