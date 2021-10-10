import React from 'react'
import './LoginPage.css'
import Button from './Button'

function LoginPage() {
  return (
    <div className='login-page'>
      <Button title='Register' />

      <div className='ctf-text'>
        <h1>CTF</h1>
        <h3>Catch The Flag</h3>
      </div>
      <div className='form-box'>
        <form className='login-form'>
          <h1>Login</h1>
          <label className='box-container'>
            <input
              type='text'
              id='username'
              placeholder='Username'
              className='input'
            />
          </label>
          <label className='box-container'>
            <input
              type='password'
              id='username'
              placeholder='Password'
              className='input'
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
