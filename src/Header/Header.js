import React from "react";
import './Header.css';

class Header extends React.Component {
  render(){
    return (
      <div className='header'>
          <nav className='header__nav'>
              <ul className='header__nav-ul'>
                  <li className='header__nav-ul_li'><a href='#'>Main</a></li>
                  <li className='header__nav-ul_li'><a href='#'>Book</a></li>
                  <li className='header__nav-ul_li'><a href='#'>Contact</a></li>
                  <li className='header__nav-ul_li'><a href='#'>Edit</a></li>
                  <li className='header__nav-ul_li'><a href='#'>Forum</a></li>
              </ul>
          </nav>
      </div>
    );
  }
}

export default Header;