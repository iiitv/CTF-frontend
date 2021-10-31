import React from 'react'
import './Button.css'

function Button({ title }) {
  return (
    <div className='button'>
      <button className='button-title'>{title}</button>
    </div>
  )
}

export default Button
