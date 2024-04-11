import { Link } from 'react-router-dom'

function Hamburger({ isOpen }) {
  return (
    <div>
        <div className="hamburger">
            <div className="burger burger-top"></div>
            <div className="burger burger-middle"></div>
            <div className="burger burger-bottom"></div>
        </div>
        <div className="hamburger-navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>

        <style jsx="true">
            {`
                .hamburger {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                    margin-right: 2.5rem;
                    display: none;
                }

                .hamburger:hover {
                    cursor: pointer;
                }

                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 2px;
                    background-color: #ddd;
                    transform-origin: 1px;
                }

                .hamburger-navbar ul {
                    transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
                    transition: 0.3s ease-out;
                    flex-direction: column;
                    background-color: #424769;
                    height: 15rem;
                    width: 40vw;
                    position: absolute;
                    right: 0;
                    margin-right: 0;
                    padding-left: 1rem;
                    border-radius: 2px;
                    padding-top: 2.5rem;
                    line-height: 2rem;
                }

                .hamburger-navbar li {
                    margin: 0.2rem auto;
                }

                .burger-top {
                    transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    transition: 0.2s linear;
                }

                .burger-middle {
                    opacity: ${isOpen ? 0 : 1};
                    transition: 0.1s linear;
                }

                .burger-bottom {
                    transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    transition: 0.2s linear;
                }

                @media only screen and (max-width: 767px) {
                    .hamburger {
                        display: flex;
                    }
                }
            `}
        </style>
    </div>
  )
}

export default Hamburger
