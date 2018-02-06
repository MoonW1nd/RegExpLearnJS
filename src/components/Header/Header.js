import React from 'react';
import Logo from '../Logo/Logo'
import './Header.css'
import FlatButton from 'material-ui/FlatButton';

export default class Header extends React.Component {
  render() {
    return(
      <header className='Header'>
        <Logo/>
        <FlatButton
          href="https://github.com/MoonW1nd/RegExpLearnJS"
          target="_blank"
          label="GitHub Link"
          primary={true}
        />
      </header>
    )
  }
}