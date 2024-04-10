import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './components/Footer'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
