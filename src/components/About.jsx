import React from 'react'
import '../styles/About.css'
import pic from '../assets/new.png'
const About = () => {

    return (
      <>
       <div id="about">
        <h2>About Me</h2>
        <div className='about-text'>
          <p>
        Passionate React Developer with a foundataion in front-end development.
        I have completed my Master's from Kamaraj University in Sivakasi, Tamil Nadu.
        I have recently completed my training in Front-end Developer Course (React,Redux,Javascripts,HTML,CSS,Rest Api's,Firebase and chakra UI) at Masai.
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
      
      </>
     
    );
  };
  

export default About
