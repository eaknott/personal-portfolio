import myCV from '../assets/Emily_Knott_CV.pdf';

function ResumeButton() {
  return (
    <div>
      <a
        href={myCV}
        className='resume-download'
        rel='noreferrer'
        target='_blank'
      >
        <button>Resume</button>
      </a>
    </div>
  );
}

export default ResumeButton;
