import ResumeButton from './ResumeButton'

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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><ResumeButton /></li>
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
                    margin-right: 1.5rem;
                    display: none;
                }

                .hamburger:hover {
                    cursor: pointer;
                }

                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 2px;
                    background-color: #C8B8DB;
                    transform-origin: 1px;
                }

                .hamburger-navbar ul {
                    transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
                    transition: 0.3s ease-out;
                    flex-direction: column;
                    background-color: #1C2541;
                    height: 20rem;
                    width: 13rem;
                    position: absolute;
                    right: 0;
                    margin-right: 0;
                    padding-top: 2.4rem;
                    line-height: 2rem;
                }

                .hamburger-navbar li {
                    margin: 0.2rem auto;
                    font-size: 1.5rem;
                }

                .burger-top {
                    transform: ${isOpen ? 'translateY(10px) rotate(45deg)' : 'rotate(0)'};
                    transform-origin: center center;
                    transition: 0.2s linear;
                }

                .burger-middle {
                    opacity: ${isOpen ? 0 : 1};
                    transition: 0.1s linear;
                }

                .burger-bottom {
                    transform: ${isOpen ? 'translateY(-12px) rotate(135deg)' : 'rotate(0)'};
                    transform-origin: center center;
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
