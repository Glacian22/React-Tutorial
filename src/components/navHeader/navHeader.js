import React from 'react'
import './navHeader.css'

let NavHeader = props => {
  let message = props.message
  return (
    <div>
      <p>{message}</p>
      {/* by putting props.children in our return, they all get rendered */}
      {props.children}
    </div>
  )
}

export default NavHeader
