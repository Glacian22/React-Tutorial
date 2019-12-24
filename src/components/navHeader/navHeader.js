import React from 'react'

let NavHeader = props => {
  return (
    <div>
      <p>{props.message}</p>
      {props.children}
    </div>
  )
}

export default NavHeader
