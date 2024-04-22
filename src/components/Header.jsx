import { useState } from 'react'
import Hamburger from './Hamburger'
import flowerLogo from '../assets/flower-code-logo.svg'
import ResumeButton from './ResumeButton'

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true)

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="header-container">
      <div className="logo">
        <a href="#home">
          <img src={flowerLogo} alt="Logo" width="45rem" />
        </a>
      </div>
      <div id="navbar">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><ResumeButton className="resume" /></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleHamburgerMenu}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </div>
  )
}

export default Header
