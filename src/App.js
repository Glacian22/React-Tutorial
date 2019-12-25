import React from 'react'
import NavHeader from './components/navHeader/navHeader'
import Square from './components/square/square'
import './App.css'

document.title = 'Color Boxes React Demo'
function App () {
  let palettes = [['blue', 'red', 'green', 'orange', 'purple', 'yellow'],
    ['grey', 'white', 'peachpuff', 'black', 'brown', 'magenta']]

  const [palette, setPalette] = React.useState(palettes[0])

  return (
    <React.Fragment>
      <NavHeader message='This is the NavHeader component'>
        <Square colors={palette} color={0} />
        <Square colors={palette} color={1} />
        <Square colors={palette} color={2} />
        <Square colors={palette} color={3} />
        <Square colors={palette} color={4} />
        <Square colors={palette} color={5} />
      </NavHeader>
      <button onClick={() => palette[0] === 'blue' ? setPalette(palettes[1]) : setPalette(palettes[0])}>
          Switch Palette
      </button>
    </React.Fragment>
  )
}

export default App
