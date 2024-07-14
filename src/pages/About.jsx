import AquariumPhoto from '../assets/IMG_4069.jpg'
import ProfilePhoto from '../assets/IMG_1179.JPG'


function About() {
  return (
    <div className="about" id="about">
        <div className="about-main">
            <header>
              <h1>More About Me</h1>
            </header>
            <main>
              <section className="about-section1">
                <img src={AquariumPhoto} className="aquarium-image" alt="me at the aquarium" />
              </section>
              <section className="about-section2" >
                <div className="about-text">
                  <p>Hi there! My name is Emily and I enjoy building efficient and user-friendly websites and applications for the internet. My interest in programming began at a young age, but I didn't take the plunge into the coding world until 2022... turns out, I found my calling!</p>
                  <br />
                  <p>Fast forward to today, and I’m proud to say I'm a self-taught full-stack developer. I've had the privilege of experiencing a number of different professional roles that have helped me enhance my skills in adaptability, leadership, problem-solving, and team collaboration. Now I'm excited to take on a new challenge in the tech realm. </p>
                  <br />
                  <p>When I'm not writing code, you'll often find me doing one of my other favorite activities - losing myself in a sci-fi novel, studying psychology and neuroscience, or frantically solving puzzles and riddles to escape a room that I paid someone to lock me in. I am passionate about nature and animals, and I love exploring the arts and new ways of creating art, such as painting, sewing, and pottery.</p>
                </div>
                <img src={ProfilePhoto} className="profile-image" alt="profile of me" />
              </section>
            </main>
        </div>
    </div>
  )
}

export default About
