import React from 'react'
import '../styles/Contact.css'
import github from '../assets/githublogo.png'
import linkedln from '../assets/linkedicon.jpg'
import phone from '../assets/phonecallicon.png'
import location from '../assets/locationicon.png'
import email from '../assets/emailicon.jpg'

const Contact = () => {
    return (
      <div id="contact">
        <h2>Contact Me</h2>
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
                      <h3>gowsalyagopalakrishnan1515@gamil.com</h3>
                       </div>
                       
                       <div className='icons'>
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
                       </div>
                      
            
        </div>
      </div>
    );
  };

export default Contact
