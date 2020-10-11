import React from 'react';

import compilationOptions from '../../compilationOptions';

import './header.scss'

function Header() {
  return (
    <header className='header'>
      <img src={`${compilationOptions.forGithubPages ? '/Aviasales' : ''}/src/components/header/images/logo.svg`}></img>
    </header>
  );
}

export default Header;
