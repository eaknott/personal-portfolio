import AquariumPhoto from '../assets/IMG_4069.jpg'
import ProfilePhoto from '../assets/IMG_1179.JPG'
import ParkPhoto from '../assets/IMG_7816.jpg'

function About() {
  return (
    <div className="about" id="about">
        <div className="about-main">
            <header>
              <h1>More About Me</h1>
            </header>
            <main>
              <section className="about-first-section">
                <img src={AquariumPhoto} alt="me at the aquarium" />
                <div className="about-first-text">
                  <p>At some point, it became clear that amidst the myriad jobs and eclectic experiences — from bartending to retail management to ESL teaching, and even trying my hand at nightlife performance — the siren song of coding was impossible to ignore. The thrill of deciphering complex puzzles and crafting elegant solutions captivated me like nothing else.</p>
                  <br />
                  <p>So in 2022, I finally answered the call and dove headfirst into a passion that melded creativity with logic, starting with Harvard CS50 - and I've never looked back. </p>
                </div>
              </section>
              <section className="about-second-section">
                <img src={ProfilePhoto} alt="profile" />
                <div className="about-second-text">
                  <p>Being a self-taught developer has been one of my most exciting adventures, and it's evident that I've been preparing for this newest challenge. </p>
                </div>
              </section>
              <section className="about-third-section">
                <p>Following my bachelor’s degree in foreign languages, I made a bold move across the globe to Taiwan, where I launched a career teaching ESL. My students ranged from kindergartners to adults eager to enhance their English proficiency.</p>
                  <p>From there, I shifted gears and joined a company specializing in developing ESL e-learning programs. In this dynamic role, I wore many hats - including that of audio engineer, voice actor, and resident Excel virtuoso - and it gave me ample opportunity to showcase my skills in problem-solving, adaptability, and team collaboration. Then I put those further to the test as I stepped into the exhilarating realm of tech and web development.</p>
              </section>
              <section className="about-fourth-section">
                <img src={ParkPhoto} alt="me in the botanical gardens" />
                <p>I have loved navigating through the maze of HTML, CSS, JavaScript, and React like a digital explorer. Each breakthrough feels like a victory earned through persistence and endless curiosity. </p>
              </section>
              <section className="about-last-section">
                  <p>When I'm not fervently writing code, you'll often find me doing one of my other favorite activities - losing myself in the pages of a gripping novel, exploring the latest findings in psychology and neuroscience, seeking lesser-known forests and mountain hiking trails, or frantically solving puzzles and riddles to escape a room that I paid someone to lock me in. Animals are my constant companions, whether I'm cuddling with my pets at home or exploring the wilds to meet new furry friends. I also can't resist getting my hands dirty now and then, often by tending to the jungle of houseplants I've accumulated. And when wanderlust strikes, I'm off exploring the world, soaking in diverse cultures and landscapes that inspire both my coding adventures and my life beyond the screen.</p>
              </section>
            </main>
        </div>
    </div>
  )
}

export default About
