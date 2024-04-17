import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Header />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
