import React from 'react'
import NavHeader from './components/navHeader/navHeader'
import Square from './components/square/square'
import './App.css'

document.title = 'Color Boxes React Demo'
function App () {
  let palettes = [['blue', 'red', 'green', 'orange', 'purple', 'yellow'],
    ['grey', 'white', 'peachpuff', 'black', 'brown', 'magenta']]

  // In class components we use a state object. In function components we use individual state variables
  // React.useState takes an initial value and returns an array with the state variable and it's setter
  const [palette, setPalette] = React.useState(palettes[0])

  return (
    <React.Fragment>
      <NavHeader message='This is the NavHeader component'>
        {/* Anything between a component's open and close tags will be automatically passed to it
         as the 'children' array in the component's 'props' object */}
        {/* passing the current palette and starting color as props */}
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
