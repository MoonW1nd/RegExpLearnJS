import './Logo.css';
import React from 'react';

export default function Logo() {
  return(
    <h1 className='Logo'>
      <p className='Logo-Line Logo-Line_first'>Reg<span className="Logo-Braces">[</span>ular<span className="Logo-Braces">]</span></p>
      <p className='Logo-Line Logo-Line_second'>Exp<span className="Logo-Braces">[</span>ression<span className="Logo-Braces">]</span></p>
      <p className='Logo-Line Logo-Line_third'>Learning</p>
    </h1>
  )
}