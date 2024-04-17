import { useState } from 'react'
import Hamburger from './Hamburger'
// import { Link } from 'react-router-dom'

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true)

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="header-container">
      <div id="navbar">
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul> */}
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
      </div>
      <div className="hamburger" onClick={toggleHamburgerMenu}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
    </div>
  )
}

export default Header
