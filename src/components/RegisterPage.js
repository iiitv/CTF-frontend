import React from 'react'
import './RegisterPage.css'
import Button from './Button'

function RegisterPage() {
  return (
    <div className='register-page'>
      <Button title='Login' />
      <div className='ctf-text'>
        <h1>CTF</h1>
        <h3>Catch The Flag</h3>
      </div>
      <div className='form-box'>
        <form className='login-form'>
          <h1>Register</h1>

          <label className='box-container'>
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='input'
            />
          </label>

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
