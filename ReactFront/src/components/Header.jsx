import React from 'react';
import Search from '@components/Search';
import logo from '@logos/Logo_ML@2x.png';
import '@styles/Header.scss';

const Header = () => {
    return (
     <header>
     <div className='containerMain'>
      <img src={logo} alt="logo"  className='logo'/>
      <Search/>
      </div>
     </header>

    );
}

export default Header;