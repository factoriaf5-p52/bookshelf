import { FormEventHandler, useState } from 'react'

import './App.css'
import { Navigation } from './components/navigation'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './features/auth/login'
import { Books } from './features/books'
import { Home } from './features/home'
import { NoMatch } from './features/no-match'
import { authService } from './features/auth/services/auth.service'
import { AuthProvider } from './context/auth.context'

function App() {

  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
        {/* <Route path='/auth/register' element={<Register />}/> */}

      </Routes>

    </AuthProvider>
  )
}

export default App
