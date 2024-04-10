import ProjectItem from "../components/ProjectItem"
import houseMarketplaceThumbnail from '../assets/thumbnails/house-marketplace-thumbnail.jpg'
import githubFinderThumbnail from '../assets/thumbnails/github-finder-thumbnail.jpg'
import supportDeskThumbnail from '../assets/thumbnails/support-desk-thumbnail.jpg'
import faqAccordionThumbnail from '../assets/thumbnails/faq-accordion-thumbnail.jpg'
import drumMachineThumbnail from '../assets/thumbnails/drum-machine-thumbnail.jpg'
import calculatorThumbnail from '../assets/thumbnails/calculator-thumbnail.jpg'
import randomQuoteMachineThumbnail from '../assets/thumbnails/random-quote-machine-thumbnail.jpg'
import productPreviewCardThumbnail from '../assets/thumbnails/product-preview-card-thumbnail.jpg'
import sketchPadThumbnail from '../assets/thumbnails/sketch-pad-thumbnail.jpg'

function Projects() {
  return (
    <div className="projects">
        <div className="projects-header">
            <h1>My Projects</h1>
        </div>

        <main>
          <swiper-container slides-per-view="1" space-between="20" scrollbar-clickable="true" mousewheel-invert="true" navigation="true">
              <swiper-slide>

                <ProjectItem 
                thumbnail={houseMarketplaceThumbnail} 
                title="House Marketplace App" 
                alt="house marketplace app" 
                liveUrl="https://house-marketplace-app-ochre.vercel.app/" 
                codeUrl="https://github.com/eaknott/house-marketplace-app" 
                technologies={["React", "Firebase Auth", "Geocoding API", "Firestore NoSQL", "Google OAuth"]}
              />

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={githubFinderThumbnail} 
                  title="GitHub Finder App" 
                  alt="github finder app" 
                  liveUrl="https://github-finder-app-navy-theta.vercel.app/" 
                  codeUrl="https://github.com/eaknott/github-finder-app" 
                  technologies={["React", "GitHub API", "TailwindCSS", "DaisyUI"]}
                />

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={supportDeskThumbnail} 
                  title="Support Desk App" 
                  alt="support desk app" 
                  liveUrl="https://support-desk-app-yfbd.onrender.com/" 
                  codeUrl="https://github.com/eaknott/support-desk-app" 
                  technologies={["MERN full-stack", "Redux", "React Router 6", "React Toastify"]}
                />

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={faqAccordionThumbnail} 
                  title="FAQ Accordion" 
                  alt="FAQ accordion page" 
                  liveUrl="https://eaknott.github.io/faq-accordion/" 
                  codeUrl="https://github.com/eaknott/faq-accordion" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={drumMachineThumbnail} 
                  title="Drum Machine" 
                  alt="drum machine app" 
                  liveUrl="https://eaknott.github.io/drum-machine/" 
                  codeUrl="https://github.com/eaknott/drum-machine" 
                  technologies={["React", "HTML", "CSS"]}
                />

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={calculatorThumbnail} 
                  title="Calculator" 
                  alt="calculator app" 
                  liveUrl="https://eaknott.github.io/calculator/" 
                  codeUrl="https://github.com/eaknott/calculator" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={randomQuoteMachineThumbnail} 
                  title="Random Quote Generator" 
                  alt="random quote generator" 
                  liveUrl="https://eaknott.github.io/random-quote-generator/" 
                  codeUrl="https://github.com/eaknott/random-quote-generator" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={productPreviewCardThumbnail} 
                  title="Product Preview Card" 
                  alt="product preview card" 
                  liveUrl="https://eaknott.github.io/product-preview-card-component/" 
                  codeUrl="https://github.com/eaknott/product-preview-card-component" 
                  technologies={["HTML", "CSS"]}
                />   

              </swiper-slide>
              <swiper-slide>

                <ProjectItem 
                  thumbnail={sketchPadThumbnail} 
                  title="Sketch Pad" 
                  alt="sketch pad" 
                  liveUrl="https://eaknott.github.io/sketch-pad/" 
                  codeUrl="https://github.com/eaknott/sketch-pad" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              </swiper-slide>

          </swiper-container>
          </main>

    </div>
  )
}

export default Projects
