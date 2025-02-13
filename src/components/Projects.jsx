import React from 'react'
import '../styles/Projects.css'
import project from '../assets/frontend page.png'
import htmllogo from '../assets/htmllogo.webp'
import csslogo from '../assets/csslogo.webp'
import jslogo from '../assets/jslogoimg.jpg'
import github from '../assets/githublogo.png'
import live from '../assets/liveicon.png'

// import { Icon } from "@chakra-ui/react"
// import { CircleArrowRight } from 'lucide-react';


const Projects = () => {
    return (
      <div id="projects">
        <h2>Projects </h2>

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
        
           <p >
        "Bluefly is an online retailer that specializes in offering 
        luxury fashion and designer products at discounted prices. 
        Founded in 1998, the website is known for providing a curated 
        selection of high-end clothing, shoes, handbags, 
        accessories, and more from renowned fashion brands"
        <div className='language'>
          <img src={htmllogo} alt='html logo'/>
          <img src={csslogo} alt='css logo'/>
          <img id='jslogo'src={jslogo} alt='js logo'/>
        </div>
         
        </p>

        {/* </div> */}
      </div>
        </div>
        
      
       
        
       
      </div>
    );
  };

export default Projects
