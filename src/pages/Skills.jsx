import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiMongodb, SiTailwindcss, SiFirebase } from 'react-icons/si'
import ResumeButton from '../components/ResumeButton'

function Skills() {
  return (
    <div className="skills" id="skills">
      <header className="skills-text">
        <h1>Technical Skills</h1>
        <p>Here are a few of the technologies, libraries, and services that I've worked with recently. Feel free to <a href="https://www.linkedin.com/in/emilyaknott/" target="_blank" rel="noreferrer">check out my LinkedIn profile</a> for more details.</p>
        <ResumeButton />
      </header>
      <main className="skills-body">
        <div className="skills-item">
          <FaHtml5 className="skills-icon" /> HTML
        </div>
        <div className="skills-item">
          <FaCss3Alt className="skills-icon" /> CSS
        </div>
        <div className="skills-item">
          <SiJavascript className="skills-icon" /> JavaScript
        </div>
        <div className="skills-item">
          <FaReact className="skills-icon" /> React.js
        </div>
        <div className="skills-item">
          <SiRedux className="skills-icon" /> Redux
        </div>
        <div className="skills-item">
          <FaNodeJs className="skills-icon" /> Node.js
        </div>
        <div className="skills-item">
          <SiTailwindcss className="skills-icon" /> Tailwind CSS
        </div>
        <div className="skills-item">
          <SiMongodb className="skills-icon" /> MongoDB
        </div>
        <div className="skills-item">
          <SiFirebase className="skills-icon" /> Firebase
        </div>
      </main>
    </div>
  )
}

export default Skills
