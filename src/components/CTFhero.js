import React from 'react'
import Button from './Button'
import './CTFhero.css'

function CTFhero() {
  return (
    <div className='hero'>
      <Button title='Leaderboard' />
      <div className='ctf-text'>
        <h1>CTF</h1>
        <h3>Catch The Flag</h3>
      </div>
    </div>
  )
}

export default CTFhero
