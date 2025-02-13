import React from 'react'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer'
import Contact from './Contact';
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Skills.css'
import '../styles/Projects.css'
import '../styles/Contact.css'
// import github from '../assets/githublogo.png'
// import linkedln from '../assets/linkedicon.jpg'

// import gif from '../assets/relatedgif.gif'

const Home = () => {
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
      </>
      
      
      
    );
  };
export default Home
