import React from 'react'
import './navHeader.css'

let NavHeader = props => {
  return (
    <div>
      <p>{props.message}</p>
      {props.children}
    </div>
  )
}

export default NavHeader
