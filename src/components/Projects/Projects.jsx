import React from 'react'
import './Projects.css'
import delicious from '../../img/delicious.png'
import HitaStoreImg from '../../img/hitaStoreImg.png'
import Handwriting from '../../img/handwriting.png'
import Einstein from '../../img/einstein.png'
import {BsGithub} from 'react-icons/bs'

export default function Projects() {
  return (

    <div id='MyPortfolio'>
        <div className="portTitle">Portfolio</div>
        <div className="mrw">Most recent work</div>
    
        <div className="proBody">
            <div className="proContainer">

                <div className="proCard">
                    <div className="proImgbx imgsz">
                        <img src={HitaStoreImg} alt=""/>
                    </div>
                    <div className="proContent">
                        <div>
                            <h3>Hita</h3>
                            <p><b>Modern Full Stack Ecommerce application with Payments functionality.</b></p>
                            <p>With Modern design, animations, the ability to add and edit products on the go using a CMS, all advanced cart functionalities, and most importantly the complete integration with Stripe so that we can cover REAL payments</p>
                            <a href="https://github.com/harshittiwarihrt/Hita_store">
                                <BsGithub style={{marginRight:'9px', position:'relative', top:'-2.5px'}}/>
                                Github code
                            </a>
                            <a href='https://hita-store.vercel.app/' id='na'>
                                View Site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="proCard">
                    <div className="proImgbx imgsz">
                        <img src={delicious} alt="" />
                    </div>
                    <div className="proContent">
                        <div>
                            <h3>delicioussss</h3>
                            <p><b>Full receipe app with ingredients and step by step instructions</b></p>
                            <p>With various cuisine options like American and Thai with a search facility where anyone can search there favourite receipe and help themselves by following the ingredients and instructions provided</p>
                            <a href="https://harshiticious.netlify.app/">
                                <BsGithub style={{marginRight:'9px', position:'relative', top:'-2.5px'}}/>
                                Github code
                            </a>
                            <a href="#">
                                View Site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="proCard">
                    <div className="proImgbx imgsz">
                        <img src={Handwriting} alt="" />
                    </div>
                    <div className="proContent">
                        <div>
                            <h3>Handwriting generation</h3>
                            <p><b>Implementation of Handwriting generation with use of RNN model named LSTM</b></p>
                            <p>The end product of this project is an application that takes
                                handwriting data, in the form of a sequential stroke data, as an input and
                                generates new handwriting</p>
                            <a href="https://github.com/harshittiwarihrt/Handwriting-Generation">
                                <BsGithub style={{marginRight:'9px', position:'relative', top:'-2.5px'}}/>
                                Github code
                            </a>
                        </div>
                    </div>
                </div>

                <div className="proCard">
                    <div className="proImgbx imgsz">
                        <img src={Einstein} alt="" />
                    </div>
                    <div className="proContent">
                        <div>
                            <h3>View morphing</h3>
                            <p><b>A shape preserving morphing algorithm.</b></p>
                            <p>Given some images, we an create intermediate images that simulate the camera movement. clearWe have also made the whole process automatic using existing feature selection methods.</p>
                            <a href="https://github.com/harshittiwarihrt/View-morphing">
                                <BsGithub style={{marginRight:'9px', position:'relative', top:'-2.5px'}}/>
                                Github code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
