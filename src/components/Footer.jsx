import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="https://github.com/eaknott" target="_blank" rel="noreferrer" aria-label="Github Link">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/emilyaknott/" target="_blank" rel="noreferrer" aria-label="LinkedIn Link">
          <FaLinkedin className="footer-icon" />          
        </a>
        <a href="https://www.instagram.com/itsemilyknott/" target="_blank" rel="noreferrer" aria-label="Instagram Link">
          <FaInstagram className="footer-icon" />          
        </a>
        <a href="https://codepen.io/eaknott" target="_blank" rel="noreferrer" aria-label="Codepen Link">
          <FaCodepen className="footer-icon" />          
        </a>
      </div>
    </div>
  )
}

export default Footer
