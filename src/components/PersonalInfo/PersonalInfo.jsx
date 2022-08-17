import React from 'react'
import './PersonalInfo.css'
import boy2 from '../../img/boy2.png'
import {BsGithub} from 'react-icons/bs'
import {ImLinkedin} from 'react-icons/im'
import {FaReact, FaHtml5} from 'react-icons/fa'
import {SiJavascript, SiCss3, SiMicrosoftazure, SiSolidity} from 'react-icons/si'
import {TbDatabase} from 'react-icons/tb'
import python from '../../img/python.png'
import { IconContext } from "react-icons";
import { Link } from 'react-scroll'

export default function PersonalInfo() {
  return (
    <div className='flexDiv' id='PersonalInfoID'>
      <div className='center about'>About</div>
      <div className='center titlePi'>Personal Info</div>
      <div className='center gtkmam' >Get to know more about me</div>

      <div className='pi-common'>
        <div className='pi-left'>
          
          <div className="left1 card">
            <div className="imgbx">
              <img src={boy2} alt="" />
            </div>
            <div className="content">
              <div className="details">
                <h2>Harshit Tiwari <br /> <span>Web developer</span></h2>
                <div className="data">
                  <a href='https://www.linkedin.com/in/harshit-tiwari-87638517a/'><ImLinkedin size={35} style={{color:'#0077b5'}} /></a>
                  <span>                   </span>
                  <a href='https://github.com/harshittiwarihrt?tab=repositories'><BsGithub size={35} style={{color:'#171515'}} /></a><br/><br />
                  <button type="button" className="btn btn-secondary btn-sm ">
                    {/* Contact me */}
                    <Link to="myContactNav" spy={true} smooth={true} offset={-140} duration={500}>
                        Contact me
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="left2">
          My name is Harshit Tiwari. I'm a passionate Frontend Web Developer 
        using web technologies to build amazing websites and focused on becoming a 
        full stack web3 developer.
        <br /><br />
        I will love to hear from you. Whether it's a project, job opportunity or just a chat. 
        Feel free to contact me.
          </div>
        </div>
        <div className="pi-right">
            <div className="skills center">Skills</div>
            <br /><br />
            <div className="buttons">

              <div className="icon">
                <IconContext.Provider value={{className:'scale1'}}>
                  <SiJavascript size={45} style={{color:'#F7CE01', background:'black'}}  />
                </IconContext.Provider>
                <span>Javascript</span>
              </div>

              <div className="icon">
                <IconContext.Provider value={{className:'scale1'}}>
                  <FaReact size={45} style={{color:'white', background:'#00D8FF'}}/>
                </IconContext.Provider>
                <span>React</span>
              </div>

              <div className="icon">
                <IconContext.Provider value={{className:'scale1'}}>
                  <FaHtml5 size={45}  style={{color:'white', background:'#E44D26'}} />
                </IconContext.Provider>
                <span>HTML 5</span>
              </div>

              <div className="icon">
              <IconContext.Provider value={{className:'scale1'}}>
                <SiCss3 size={45}  style={{color:'white', background:'#177CBE'}}/>
              </IconContext.Provider>
                <span>CSS</span>
              </div>

              <div className="icon">
              <IconContext.Provider value={{className:'scale1'}}>
                <SiSolidity size={45} />
              </IconContext.Provider>
                <span>Solidity</span>
              </div>

              <div className="icon">
                <IconContext.Provider value={{className:'scale1'}}> 
                  <img src={python} alt="" />
                </IconContext.Provider>
                <span>Python</span>
              </div>

              <div className="icon">
              <IconContext.Provider value={{className:'scale1'}}> 
                <TbDatabase size={45} style={{color:'#170369'}}/>
              </IconContext.Provider>
                <span>SQL</span>
              </div>

              <div className="icon">
              <IconContext.Provider value={{className:'scale1'}}> 
                <SiMicrosoftazure size={45} style={{color:'#35BBEE'}} className="PiIxon"/>
              </IconContext.Provider>
                <span> Azure</span>
              </div>

            
            </div>
        </div>
      </div>
    </div>
  )
}
