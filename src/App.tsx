import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { useFavicon } from './utils'

function App () {
  useFavicon()

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
