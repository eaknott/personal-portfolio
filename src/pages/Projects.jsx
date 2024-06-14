import FeaturedProject from "../components/FeaturedProject"
import ProjectItem from "../components/ProjectItem"
import faqAccordionThumbnail from '../assets/thumbnails/faq-accordion-thumbnail.jpg'
import drumKitThumbnail from '../assets/thumbnails/drumkit-thumbnail.jpg'
import calculatorThumbnail from '../assets/thumbnails/calculator-thumbnail.jpg'
import randomQuoteThumbnail from '../assets/thumbnails/random-quotes-thumbnail.jpg'
import productCardThumbnail from '../assets/thumbnails/product-preview-thumbnail.jpg'
import sketchPadThumbnail from '../assets/thumbnails/sketch-pad-thumbnail.jpg'
import thumbnailHouseMarketplace from '../assets/thumbnails/thumbnail-house-marketplace-app.png'
import thumbnailGithubFinder from '../assets/thumbnails/thumbnail-github-finder-app.png'
import thumbnailSupportDesk from '../assets/thumbnails/thumbnail-support-desk-app.png'

function Projects() {
  return (
    <div className="projects" id="projects">
        <div className="projects-header">
            <h1>My Projects</h1>
        </div>

        <main>
          {/* <swiper-container slides-per-view="1" space-between="20" scrollbar-clickable="true" mousewheel-invert="true" navigation="true" loop="true">
              <swiper-slide> */}

                <FeaturedProject 
                  className="featured-project fp1"
                  thumbnail={thumbnailHouseMarketplace} 
                  thumbnailClassName="ft1" 
                  title="House Marketplace App" 
                  alt="house marketplace app" 
                  liveUrl="https://house-marketplace-app-ochre.vercel.app/" 
                  codeUrl="https://github.com/eaknott/house-marketplace-app" 
                  technologies={["React", "Firebase/Firestore", "Geocoding API", "Google OAuth"]}  
                  description="A React web app for viewing and posting house listings in a marketplace. A mobile-first app utilizing Firebase authentication, Firestore NoSQL database, geocoding API for addresses, and Google OAuth for user sign-in and registration."
                />

                <FeaturedProject 
                  className="featured-project fp2"
                  thumbnail={thumbnailGithubFinder} 
                  thumbnailClassName="ft2" 
                  title="GitHub Finder App" 
                  alt="github finder app" 
                  liveUrl="https://github-finder-app-navy-theta.vercel.app/" 
                  codeUrl="https://github.com/eaknott/github-finder-app" 
                  technologies={["React", "GitHub API", "TailwindCSS", "DaisyUI"]} 
                  description="A React app that searches GitHub users and shows user info such as profile, stats, and latest public repos. Calls the GitHub API, styled using TailwindCSS and DaisyUI, and deployed with Vercel."
                />
                
                <FeaturedProject 
                  className="featured-project fp3"
                  thumbnail={thumbnailSupportDesk} 
                  thumbnailClassName="ft3" 
                  title="Support Desk App" 
                  alt="support desk app" 
                  liveUrl="https://support-desk-app-yfbd.onrender.com/" 
                  codeUrl="https://github.com/eaknott/support-desk-app" 
                  technologies={["MERN full-stack", "Redux", "React Router 6", "React Toastify"]} 
                  description="A MERN full-stack app for product tech support. Uses Redux for state management, Toastify for popup messages, and React Router 6. Deployed with Render"
                />
                
                <p className="other-projects-header">Some Other Things I've Built</p>

                {/* <ProjectItem 
                thumbnail={houseMarketplaceThumbnailWide} 
                title="House Marketplace App" 
                alt="house marketplace app" 
                liveUrl="https://house-marketplace-app-ochre.vercel.app/" 
                codeUrl="https://github.com/eaknott/house-marketplace-app" 
                technologies={["React", "Firebase/Firestore", "Geocoding API", "Google OAuth"]}
                /> */}
 
              {/* </swiper-slide>
              <swiper-slide> */}

                {/* <ProjectItem 
                  thumbnail={githubFinderThumbnailWide} 
                  title="GitHub Finder App" 
                  alt="github finder app" 
                  liveUrl="https://github-finder-app-navy-theta.vercel.app/" 
                  codeUrl="https://github.com/eaknott/github-finder-app" 
                  technologies={["React", "GitHub API", "TailwindCSS", "DaisyUI"]}
                /> */}

              {/* </swiper-slide>
              <swiper-slide> */}

                {/* <ProjectItem 
                  thumbnail={supportDeskThumbnailWide} 
                  title="Support Desk App" 
                  alt="support desk app" 
                  liveUrl="https://support-desk-app-yfbd.onrender.com/" 
                  codeUrl="https://github.com/eaknott/support-desk-app" 
                  technologies={["MERN full-stack", "Redux", "React Router 6", "React Toastify"]}
                /> */}

              {/* </swiper-slide>
              <swiper-slide> */}

                <ProjectItem 
                  thumbnail={faqAccordionThumbnail} 
                  title="FAQ Accordion" 
                  alt="FAQ accordion page" 
                  liveUrl="https://eaknott.github.io/faq-accordion/" 
                  codeUrl="https://github.com/eaknott/faq-accordion" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              {/* </swiper-slide>
              <swiper-slide> */}

                <ProjectItem 
                  thumbnail={drumKitThumbnail} 
                  title="Drum Machine" 
                  alt="drum machine app" 
                  liveUrl="https://eaknott.github.io/drum-machine/" 
                  codeUrl="https://github.com/eaknott/drum-machine" 
                  technologies={["React", "HTML", "CSS"]}
                />

              {/* </swiper-slide>
              <swiper-slide> */}

                <ProjectItem 
                  thumbnail={calculatorThumbnail} 
                  title="Calculator" 
                  alt="calculator app" 
                  liveUrl="https://eaknott.github.io/calculator/" 
                  codeUrl="https://github.com/eaknott/calculator" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              {/* </swiper-slide>
              <swiper-slide> */}

                <ProjectItem 
                  thumbnail={randomQuoteThumbnail} 
                  title="Random Quote Generator" 
                  alt="random quote generator" 
                  liveUrl="https://eaknott.github.io/random-quote-generator/" 
                  codeUrl="https://github.com/eaknott/random-quote-generator" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              {/* </swiper-slide>
              <swiper-slide> */}

                <ProjectItem 
                  thumbnail={productCardThumbnail} 
                  title="Product Preview Card" 
                  alt="product preview card" 
                  liveUrl="https://eaknott.github.io/product-preview-card-component/" 
                  codeUrl="https://github.com/eaknott/product-preview-card-component" 
                  technologies={["HTML", "CSS"]}
                />   

              {/* </swiper-slide>
              <swiper-slide> */}

                <ProjectItem 
                  thumbnail={sketchPadThumbnail} 
                  title="Sketch Pad" 
                  alt="sketch pad" 
                  liveUrl="https://eaknott.github.io/sketch-pad/" 
                  codeUrl="https://github.com/eaknott/sketch-pad" 
                  technologies={["JavaScript", "HTML", "CSS"]}
                />            

              {/* </swiper-slide>

          </swiper-container> */}
          </main>

    </div>
  )
}

export default Projects
