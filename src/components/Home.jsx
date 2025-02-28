import React from 'react'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer'
import Contact from './Contact';
import '../styles/Home.css'
import '../styles/About.css'
// import '../styles/Skills.css'
// import '../styles/Projects.css'
// import '../styles/Contact.css'

import pic from '../assets/new.png'

//projects
import project from '../assets/frontend page.png'
import htmllogoproject from '../assets/htmllogo.webp'
import csslogoproject from '../assets/csslogo.webp'
import jslogoproject from '../assets/jslogoimg.jpg'
import githubproject from '../assets/githublogo.png'
import live from '../assets/liveicon.png'

//skills
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


//contact
import githubcontact from '../assets/githublogo.png'
import linkedln from '../assets/linkedicon.jpg'
import phone from '../assets/phonecallicon.png'
import location from '../assets/locationicon.png'
import email from '../assets/emailicon.jpg'

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
       {/* <About/> */}
       <div id="about">
               <h2>About Me</h2>
               <div className='about-text'>
                 <p>
               Passionate React Developer with a foundataion in front-end development.
               I have completed my Master's from Kamaraj University in Sivakasi, Tamil Nadu.
               I have recently completed my training in Front-end Developer Course at Masai 
               (React, Redux, Javascripts, HTML, CSS, Rest Api's, Firebase and chakra UI).
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
       {/* <Skills/> */}
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
      {/* <Projects/> */}
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
                <img  id='githubproject'src={githubproject} alt='github logo'/>
      
                </a>
                </div>
              
                 <p id='p'>
              "Bluefly is an online retailer that specializes in offering 
              luxury fashion and designer products at discounted prices. 
              Founded in 1998, the website is known for providing a curated 
              selection of high-end clothing, shoes, handbags, 
              accessories, and more from renowned fashion brands"
              <div className='language'>
                <img id='htmllogo'src={htmllogoproject} alt='html logo'/>
                <img id='csslogo'src={csslogoproject} alt='css logo'/>
                <img id='jslogo'src={jslogoproject} alt='js logo'/>
              </div>
               
              </p>
      
              {/* </div> */}
            </div>
              </div>
              
            </div>
      {/* <Statistics/> */}
      {/* <Contact/> */}
       <div id="contact">
              <h2 id='h2'>Contact Me</h2>
              <div className='contact-details'>
                             <div className='mobile'>
                             <a
                            href="" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='phone'src={phone} alt='phone logo'/>
                            </a>
                            <h3>+91 9344005787</h3>
      
                             </div>
                             <div className='location'>
                             <a
                            href="https://maps.app.goo.gl/x8onwBS9WxYUYFXe9" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='location'src={location} alt='location logo'/>
                            </a>
                            <h3>Sivakasi, Tamil Nadu </h3>
                             </div>
                             <div className='email'>
                             <a
                            href="https://mail.google.com/" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='email'src={email} alt='email logo'/>
                            </a>
                            <h3>gowsalyagopalakrishnan1515@gmail.com</h3>
                             </div>
                             
                             <div className='icons'>
                              <a
                            href="https://github.com/Gowsalya-Gopalakrishnan" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='github'src={githubcontact} alt='github logo'/>
                            </a>
                            <a
                            href="https://www.linkedin.com/in/gowsalya-gopalakrishnan-547a6a34a/" 
                            // download="resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <img  id='linkedln'src={linkedln} alt='linkedln logo'/>
                            </a> 
                             </div>
              </div>
            </div>
      {/* <Footer/> */}
      </div>
      <div id="footer">
        <h2 id='h2'>Thank you for Visiting 😊❤️</h2>
      </div>
      </>
      
      
      
    );
  };
export default Home
