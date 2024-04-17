import ProfileImage from '../assets/IMG_8326 2.jpg'

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-text">
        <h1>Hello, my name is Emily.</h1>
        <p>I'm a frontend developer, animal lover, environmental advocate, and avid learner. Welcome to my website!</p>
      </div>
      <div className="home-img">
        <img src={ProfileImage} alt="profile" />
      </div>
    </div>
  )
}

export default Home
