import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaCodepen } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="https://github.com/eaknott" target="_blank" rel="noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/emilyaknott/" target="_blank" rel="noreferrer">
          <FaLinkedin className="footer-icon" />          
        </a>
        <a href="https://twitter.com/emknotty" target="_blank" rel="noreferrer">
          <FaXTwitter className="footer-icon" />          
        </a>
        <a href="https://www.facebook.com/eaknott/" target="_blank" rel="noreferrer">
          <FaFacebook className="footer-icon" />          
        </a>
        <a href="https://www.instagram.com/itsemilyknott/" target="_blank" rel="noreferrer">
          <FaInstagram className="footer-icon" />          
        </a>
        <a href="https://codepen.io/eaknott" target="_blank" rel="noreferrer">
          <FaCodepen className="footer-icon" />          
        </a>
      </div>
    </div>
  )
}

export default Footer
