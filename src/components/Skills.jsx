import React from 'react'
import '../styles/Skills.css'
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
const Skills = () => {
    return (
      <div id="skills">
        <h2>Skills</h2>
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
    );
  };
export default Skills
