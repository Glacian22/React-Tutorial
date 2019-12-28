import React from 'react'
import './square.css'

let Square = props => {
  let colors = props.colors

  const [color, setColor] = React.useState(props.color)

  return (
    <div className='square' style={{ backgroundColor: colors[color] }} onClick={() => setColor((color + 1) % colors.length)}>
      {colors[color]}
    </div>
  )
}

export default Square
