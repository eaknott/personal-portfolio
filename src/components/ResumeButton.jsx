import myCV from '../assets/EMILY_KNOTT_CV.jpg'

function ResumeButton() {
  return (
    <div>
        <a href={myCV} className="resume-download" download="EMILY_ KNOTT_CV.jpg">
            <button>Download My Resume</button>
        </a>
    </div>
  )
}

export