import React from 'react'
import NavHeader from './components/navHeader/navHeader'
import Square from './components/square/square'
import './App.css'

function App () {
  return (
    <NavHeader message='This is the NavHeader component'>
      <Square color={0} />
      <Square color={1} />
      <Square color={2} />
      <Square color={3} />
      <Square color={4} />
      <Square color={5} />
    </NavHeader>
  )
}

export default App
