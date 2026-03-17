import React from 'react'
import '../App.css';
import Searchbar from './search-bar.jsx';
import Logo from './logo'
import Loginbtn from './loginbtn.jsx';
import Navgations from './Navgations.jsx';

const Header = ({ count }) => {

  return (
    <header className='header'>
        <Logo />
        <Navgations />
        <div className='header-right'>
            <Searchbar />
            <div className='cart-container'>
              <span className='carted-amount'>{count}</span>
              <span className='cart-icon'><svg  xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" viewBox="0 0 24 24" ><path d="M21 4H6.17l-.18-1.15A1 1 0 0 0 5 2H2v2h2.14l1.87 12.15A1 1 0 0 0 7 17h12v-2H7.86l-.31-2H19c.45 0 .84-.3.96-.73l2-7A1 1 0 0 0 21 3.99Zm-2.75 7H7.24l-.77-5h13.2l-1.43 5ZM8 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path></svg></span>
            </div>
            <Loginbtn />
        </div>
    </header>
  )
}

export default Header;