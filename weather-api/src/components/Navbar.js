import React from 'react'
import './Navbar.css';
import Search from '../components/Search';
function Navbar() {
  return (
    <div  className='Navbar'>
        <Search />
        <button>FIND WEATHER</button>
    </div>
  )
}

export default Navbar