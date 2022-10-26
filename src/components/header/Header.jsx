import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import { me } from "../../config";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{me.name}</h1>
        <h5 className="text-light">{me.role}</h5>
        <CTA />
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header