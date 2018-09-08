import React, { Component } from 'react'
import logo from '../../images/logo.png'
import './navbar_footer.css'

class Navbar extends Component {
  render() {
    return (
      <header className='header'>
        <nav className='navbar'>
            <img src={logo} alt="vklogo"/>
            <div className="input">
                <input className='search_inp' type="search" placeholder="Поиск"/> 
            </div>
            <button className='btnSwitch'>Switch to English</button>
        </nav>
      </header>
    )
  }
}

export default Navbar