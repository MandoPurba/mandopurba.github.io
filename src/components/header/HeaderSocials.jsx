import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/romando-purba12/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/MandoPurba" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/romando_purba12" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials