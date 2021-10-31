import React, { useState } from 'react'
import './RegisterPage.css'
import Button from './Button'
import CTFhero from './CTFhero'

function RegisterPage() {
  const [email, SetEmail] = useState('')
  const [username, SetUsername] = useState('')
  const [password, SetPassword] = useState('')
  const [newentry, SetNewentry] = useState([])

  return (
    <div className='register-page'>
      <CTFhero />
      <div className='form-box'>
        <form className='login-form'>
          <h1>Register</h1>

          <label className='box-container'>
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='input'
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </label>

          <label className='box-container'>
            <input
              type='text'
              id='username'
              placeholder='Username'
              className='input'
              value={username}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </label>
          <label className='box-container'>
            <input
              type='password'
              id='username'
              placeholder='Password'
              className='input'
              value={password}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </label>

          <label className='box-container'>
            <input
              type='submit'
              id='submit'
              value='Sign Up'
              className='submit'
            />
          </label>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
