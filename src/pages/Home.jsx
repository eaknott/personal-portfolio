import ProfileImage from '../assets/IMG_8326 2.jpg'

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-text">
        <div className="intro">Hello, my name is </div>
        <h1>Emily.</h1>
        <p>I'm a frontend developer, animal lover, and avid learner. Welcome to my website! Keep scrolling to learn more ...</p>
      </div>
      <div className="home-img">
        <img src={ProfileImage} alt="Headshot" />
      </div>
    </div>
  )
}

export default Home
