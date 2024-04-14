import myCV from '../assets/EMILY KNOTT CV.jpg'

function ResumeButton() {
  return (
    <div>
        <a href={myCV} className="resume-download" download>
            <button>Download My Resume</button>
        </a>
    </div>
  )
}

export default ResumeButton
