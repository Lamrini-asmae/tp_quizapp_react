import React from 'react'
const Button = ({label,onClick} ) => {
  return (
    <button className='defaultButton' onClick={onClick}>{label}</button>
  )
}
export default Button