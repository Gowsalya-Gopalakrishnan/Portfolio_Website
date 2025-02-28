import React from 'react'
// import React from 'react'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer'
import Contact from './Contact';
// import '../styles/Home.css'
// import '../styles/About.css'
// import '../styles/Skills.css'
// import '../styles/Projects.css'
// import '../styles/Contact.css'

// import React from 'react'
// import '../styles/Skills.css'
import htmllogo from '../assets/htmllogo.webp'
import csslogo from '../assets/csslogo.webp'
import jslogo from '../assets/jslogoimg.jpg'
import reactlogo from '../assets/reactlogo.png'
import vscodelogo from '../assets/vscodelogoimg.png'
import netlify from '../assets/netlifylogoimg.png'
// import github from '../assets/githublogo.png'
import jsonserver from '../assets/jsonserver.jpg'
import nodejs from '../assets/nodelogo.png'
import redex from '../assets/redexlogo.png'
import github from '../assets/githublogo.png'


// import React from 'react'
// import '../styles/Projects.css'
import project from '../assets/frontend page.png'
import htmllogo from '../assets/htmllogo.webp'
import csslogo from '../assets/csslogo.webp'
import jslogo from '../assets/jslogoimg.jpg'
import github from '../assets/githublogo.png'
import live from '../assets/liveicon.png'
// import github from '../assets/githublogo.png'
// import linkedln from '../assets/linkedicon.jpg'

// import gif from '../assets/relatedgif.gif'

const CommonMobileScreen = () => {
  return (
    <>
    <div id="home">
      <h2>Hello! I'm Gowsalya</h2>
      <p>React Developer</p>
      {/* <img id='gif' src={gif} alt='animation'/> */}
      {/* <div className='icons'>
                              <a
                            href="https://github.com/Gowsalya-Gopalakrishnan" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='github'src={github} alt='github logo'/>
                            </a>
                            <a
                            href="https://www.linkedin.com/in/gowsalya-gopalakrishnan-547a6a34a/" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='linkedln'src={linkedln} alt='linkedln logo'/>
                            </a> 
      </div> */}
    </div>
     <div>
     <About/>
     <Skills/>
    <Projects/>
    {/* <Statistics/> */}
    <Contact/>
    <Footer/>
    </div>

    <div id="about">
            <h2>About Me</h2>
            <div className='about-text'>
              <p>
            Passionate React Developer with a foundataion in front-end development.
            I have completed my Master's from Kamaraj University in Sivakasi, Tamil Nadu.
            I have recently completed my training in React,Redux,Javascripts,HTML,CSS,Rest Api's and chakra UI.
            I thrive in building responsive interactive User Interfaces.
            Eager to contribute to a team and continue learing from experinced developers while applying my knowledge in real world applications.  
            </p>
            <a
              href="https://drive.google.com/file/d/1wp1eaOLZW22XAkwS-aV2bU-Y1QYU1KXJ/view?usp=sharing" 
              download="resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer">
                  <button className='resumebtn'>Resume</button>
    
              </a>
            </div>
            
            <div className='image'>
           
            <img id='pic'src={pic} alt='professional pic'/>
             </div>
             
    </div>

     <div id="skills">
            <h2 id='h2'>Skills</h2>
            <div className='skills-logo'>
              <img src={htmllogo} alt='html logo'/>
              <img src={csslogo} alt='css logo'/>
              <img id='jslogo'src={jslogo} alt='js logo'/>
              <img src={reactlogo} alt='react logo'/>
              <img src={vscodelogo} alt='vscode logo'/>
              <img  id='netlifylogo'src={netlify} alt='netlify logo'/>
              {/* <img id='github' src={github} alt='github logo'/> */}
              <img  id='jsonserver'src={jsonserver} alt='jsonserver logo'/>
              <img  id='nodejs'src={nodejs} alt='nodejs logo'/>
              <img  id='redex'src={redex} alt='redex logo'/>
              <img src={github} alt='github logo'/>
            </div>
          </div>

           <div id="projects">
                  <h2 id='h2'>Projects </h2>
          
                  <div className='common-project-div'>
                    <div className='project-details'>
                   {/* <div className='project-image'> */}
                    <img src={project} alt='front page of the project'/>
                    
                    <div className='live-git-icons'>
                    <a
                    href="https://gowsalya-gopalakrishnan.github.io/projectrepo/" 
                    // download="resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      <img id='live' src={live} alt='live icon'/>
                    </a>
                     <a
                    href="https://github.com/Gowsalya-Gopalakrishnan/projectrepo" 
                    // download="resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <img  id='github'src={github} alt='github logo'/>
          
                    </a>
                    </div>
                  
                     <p id='p'>
                  "Bluefly is an online retailer that specializes in offering 
                  luxury fashion and designer products at discounted prices. 
                  Founded in 1998, the website is known for providing a curated 
                  selection of high-end clothing, shoes, handbags, 
                  accessories, and more from renowned fashion brands"
                  <div className='language'>
                    <img id='htmllogo'src={htmllogo} alt='html logo'/>
                    <img id='csslogo'src={csslogo} alt='css logo'/>
                    <img id='jslogo'src={jslogo} alt='js logo'/>
                  </div>
                   
                  </p>
          
                  {/* </div> */}
                </div>
                  </div>
                  
                </div>
    </>

    
  )
}

export default CommonMobileScreen
