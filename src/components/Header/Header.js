import React from 'react';
import Logo from '../Logo/Logo'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return(
      <header className='Header'>
        <Logo/>
      </header>
    )
  }
}