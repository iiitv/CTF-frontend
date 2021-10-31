import React, { useState } from 'react'
import Button from './Button'
import './Questions.css'
import { Data } from './Data'

import Dropdown from './Dropdown'

function Questions() {
  return (
    <div className='question-page'>
      <Button title='Leaderboard' />
      <div className='ctf-text'>
        <h1>CTF</h1>
        <h3>Catch The Flag</h3>
      </div>
      <div
        style={{
          borderTop: '2px solid #fff ',
          marginTop: 400,
        }}
      ></div>
      <Dropdown />
    </div>
  )
}

export default Questions
