import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn-logo.svg';

import './Header.scss';

const Header = () => (
  <div className='header'>
    <Link className="logo-container" to="/">
      <Logo />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
      <Link className='option' to='/signin'>Sign In</Link>
    </div>
  </div>
);

export default memo(Header);