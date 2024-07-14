import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGit, FaBootstrap, FaSass } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiMongodb, SiTailwindcss, SiFirebase, SiDjango, SiPostgresql, SiPostman, SiNginx, SiGunicorn, SiJquery } from 'react-icons/si'

function Skills() {
  return (
    <div className="skills" id="skills">
      <header className="skills-text">
        <h1>Technical Skills</h1>
        <p>Here are a few of the technologies, libraries, tools, and platforms that I've worked with recently. Feel free to <a href="https://www.linkedin.com/in/emilyaknott/" target="_blank" rel="noreferrer">check out my LinkedIn profile</a> for more details.</p>
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
          <FaPython className="skills-icon" /> Python
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
          <SiJquery className="skills-icon" /> jQuery
        </div>
        <div className="skills-item">
          <SiDjango className="skills-icon" /> Django
        </div>
        <div className="skills-item">
          <SiTailwindcss className="skills-icon" /> Tailwind CSS
        </div>
        <div className="skills-item">
          <FaBootstrap className="skills-icon" /> Bootstrap
        </div>
        <div className="skills-item">
          <FaSass className="skills-icon" /> Sass
        </div>
        <div className="skills-item">
          <SiMongodb className="skills-icon" /> MongoDB
        </div>
        <div className="skills-item">
          <SiPostgresql className="skills-icon" /> PostgreSQL
        </div>
        <div className="skills-item">
          <SiFirebase className="skills-icon" /> Firebase
        </div>
        <div className="skills-item">
          <FaGit className="skills-icon" /> Git
        </div>
        <div className="skills-item">
          <SiPostman className="skills-icon" /> Postman
        </div>
        <div className="skills-item">
          <SiNginx className="skills-icon" /> Nginx
        </div>
        <div className="skills-item">
          <SiGunicorn className="skills-icon" /> Gunicorn
        </div>
      </main>
    </div>
  )
}

export default Skills
