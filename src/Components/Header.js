import React from 'react'
import{Link} from 'react-router-dom'

    
function Header() {
  return (
    <>
      <nav>Complete Your Daily Tasks.</nav>
      <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user/tempid'>User</Link>
      </div>
    </>
  )
}

export default Header
