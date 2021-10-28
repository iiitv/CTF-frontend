import React from 'react'
import './Landing.css'
import flag from '../Assets/flag.png'
import rectangle from '../Assets/rectangle.png'
import Button from './Button'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

function Landing() {
  return (
    <div className='landing'>
      <div className='header'>
        <div className='leaderboard'>
          <h2>Leaderboard</h2>
        </div>
        <div className='login'>
          <Button title='Login' />
        </div>
      </div>

      <div className='ctf-text'>
        <h1>CTF</h1>
        <h3>Catch The Flag</h3>
      </div>

      <div className='flag'>
        <img src={flag} alt='flag' />
        <img src={rectangle} alt='rectangle' className='rectangle' />
      </div>

      <div className='about-us'>
        <h2>About Us</h2>
        <h4>
          Ut consequat semper viverra nam libero justo laoreet. Vel orci porta
          non pulvinar neque laoreet. Id consectetur purus ut faucibus pulvinar
          elementum. Tempus imperdiet nulla malesuada pellentesque elit eget
          gravida cum. Sit amet massa vitae tortor condimentum. Nisl purus in
          mollis nunc sed id. Ac placerat vestibulum lectus mauris ultrices.
          Nulla facilisi cras fermentum odio eu feugiat. Feugiat scelerisque
          varius morbi enim nunc. Molestie nunc non blandit massa enim nec dui
          nunc mattis. Non tellus orci ac auctor augue mauris augue neque. Duis
          ultricies lacus sed turpis. Lectus quam id leo in vitae.
        </h4>
        <button className='register'>Register</button>
      </div>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
    </div>
  )
}

export default Landing
