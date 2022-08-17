import React from 'react'
import './Hero2.css'
import backpic from '../../img/backpic.png'
import {BsArrowDownCircleFill} from 'react-icons/bs'
import Resume from './resume.pdf';

export default function Hero() {
  return (
    <main id='MyHero'>
            {/* <div className="sectionHeroImage">
                <img src={backpic} alt="This is my pic" className='heroImg'/>
            </div> */}
        <section className='sectionHero section'>
            <div className="sectionHeroData">
                <p className="heroTopData">Harshit Tiwari</p>
                <h2 className='heroHeading'>I build things for web</h2>

                <div>
                    <a href={Resume} download className='heroBtn cvBtn' style={{fontFamily:"serif"}}>Download CV</a>
                </div>

                <div className="scrollDown">
                    <BsArrowDownCircleFill />
                    <span>Scroll down</span>
                </div>
            </div>

            <div className='heroPic'>
                <img src={backpic} alt="This is my pic" className='heroImg'/>
            </div>
        </section>
    </main>
  )
}
