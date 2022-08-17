import React from 'react'
import './Footer.css'
import Twitter2 from '../../img/twitter2.png';
import Instagram2 from '../../img/instagram2.png';
import Linkedin2 from '../../img/linkedin2.png';
import Gmail2 from '../../img/gmail2.png';
import Yahoo2 from '../../img/yahoo2.png';
import Facebook2 from '../../img/facebook2.png';
import {AiFillCopyrightCircle} from 'react-icons/ai';


function Footer() {
  return (
    <div className='mainFoot'>
      <div className=''>
        <div className='footIandT'>
            <div className='footIThalf'>

            <a href='mailto:harshittiwarirt@gmail.com'>
                <div className='tempflex'>
                    <img src={Gmail2} alt="Gmail icon"/>
                    <span>harshittiwarirt@gmail.com</span>
                </div>
            </a>

            <a href='mailto:harshittiwarirt@yahoo.com'>
                <div className='tempflex'>
                    <img src={Yahoo2} alt="Copyright icon"/>
                    <span>harshittiwarirt@yahoo.com</span>
                </div>
            </a>

            <a href='https://www.instagram.com/harshit___tiwari/?hl=en'>
                <div className='tempflex'>
                    <img src={Instagram2} alt="Instagram icon"/>
                    <span>harshit___tiwari</span>
                </div>
            </a>
            </div>

            < div className='footIThalf'>
                    <a href='https://www.linkedin.com/in/harshit-tiwari-87638517a/'>
                        <div className='tempflex'>
                            <img src={Linkedin2} alt="Linkedin icon"/>
                            <span>harshit-tiwari-87638517a</span>
                        </div>
                    </a>
                    
                    <a href='https://www.facebook.com/harshit.tiwari.108/'>
                        <div className='tempflex'>
                            <img src={Facebook2} alt="Copyright icon"/>
                            <span>harshit.tiwari.108</span>
                        </div>
                    </a>
                    
                    <a href='https://twitter.com/Harshit04086908'>
                        <div className='tempflex'>
                            <img src={Twitter2} alt="Copyright icon"/>
                            <span>Harshit04086908</span>
                        </div>
                    </a>
            </div>
            <br />
        </div >
            <div className='footCopyright'>
                <div>
                    <AiFillCopyrightCircle size={13} className='footIcon'/>
                    {/* <img src={Copyright} alt="Copyright icon"/> */}
                    <span>2022 Harshit Tiwari</span>
                </div>
            </div>
      </div>
    </div>      
  )
}

export default Footer
