import React, {useRef, useState} from "react";
import './Contact.css'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import emailjs from "@emailjs/browser";
import {MdCall} from "react-icons/md";
import { IconContext } from "react-icons";
import Twitter from '../../img/twitter.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';

export default function Phone() {  

    const form = useRef();
    const [done, setDone] = useState(false)


    const sendEmail = (e) => {
      e.preventDefault();

        emailjs
            .sendForm(
            "service_wg4b0fr",
            "template_uomczl4",
            form.current,
            "boCWNMzhS2ZWGaWgc"  
            )
            .then(
            (result) => {
                console.log(result.text);
                setDone(true);
                form.reset();
            },
            (error) => {
                console.log(error.text);
            }
            )
    };

    const center = useMemo(()=> ({lat:21.268557, lng:81.595171}),[])

    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_API_KEY })
    if(!isLoaded) return <div>.. slow network speed, wait for few seconds</div>


  return (<>


    <div className="contactTitle" id="myContactNav">
    Contact
    </div>

    <div className="PhoneCommon grid gridTwoColumn contactContainer">

        <div className="PreMap">
            <GoogleMap zoom={18} center={{lat:21.268557, lng:81.595171}} mapContainerClassName="myMap">
                <Marker position={center}/>
            </GoogleMap>
        </div>

        <div className="hate">
            <div className="getIT">Let's talk about everything.</div>
            <div className="dlForm">Don't like forms? send me an
            <a href="mailto:harshittiwarirt@gmail.com"> email</a>
            </div>

            <div className="callMA">Call me 
            <IconContext.Provider value={{className:'IconCallMA'}}> <MdCall size={35}/> </IconContext.Provider>
             <u>+91-8109794547</u>
             </div>

            <div className="ocwmv">or Connect with me via</div>
            <div className="SbICon">
                <div className="IconLinkedin">
                    <a href="https://www.linkedin.com/in/harshit-tiwari-87638517a/"><img src={Linkedin} alt="Linkeidn icon" /></a>
                </div>
                <div className="IconTwitter">
                    <a href="https://twitter.com/Harshit04086908"><img src={Twitter} alt="Twitter icon" /></a>
                </div>
                <div className="IconInstagram">
                    <a href="https://www.instagram.com/harshit___tiwari/?hl=en'"><img src={Instagram} alt="Instagram icon" /></a>
                </div>
            </div>
            
            <div></div>
        </div>

        <div className='preBox'>
            <div className="box">
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} id="myForm">
                    <div className="inputbox">
                        <input type="text"
                        name="user_name"
                        required
                        placeholder='Name' />
                    </div>
                    <div className="inputbox">
                        <input type="email"
                        name="user_email"
                        required
                        placeholder='Email id'/>
                    </div>
                    <div className="inputbox">
                    <textarea 
                        placeholder="Message"
                        name="message"
                        required
                        className="textAReaButton"
                    />
                    <input type="submit" value="Send" className="PhoneButton"/>
                    <p style={{color:"black"}} className="somePara">{done && "Thanks for Contacting me"}</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>

  )
}
