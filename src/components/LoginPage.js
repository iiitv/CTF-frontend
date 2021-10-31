import React, { useState } from 'react'
import './LoginPage.css'
import Button from './Button'
import CTFhero from './CTFhero'

function LoginPage() {
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [newentry, SetNewentry] = useState([])

  const submitForm = () => {}
  return (
    <div className='login-page'>
      <CTFhero />
      <div className='form-box'>
        <form className='login-form' onSubmit={submitForm}>
          <h1>Login</h1>
          <label className='box-container'>
            <input
              type='text'
              id='username'
              placeholder='Username'
              className='input'
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </label>
          <label className='box-container'>
            <input
              type='password'
              id='username'
              placeholder='Password'
              className='input'
              autoComplete='off'
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </label>

          <label className='box-container'>
            <input
              type='submit'
              id='submit'
              value='Sign In'
              className='submit'
            />
          </label>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
