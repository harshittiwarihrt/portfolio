import React from 'react'
import './Navbar.css'
import HarshitLogo3 from '../../img/HarshitLogo3.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useState } from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components'
import { hover } from '@testing-library/user-event/dist/hover'

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [fix, setFix] = useState(false)

    function setFixed() {
        if(window.scrollY >= 940){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

  return (
    <div className='NavMainDiv'>
        <header className={`NavHeader ${isNavExpanded?'NavActive':''}`}>
            <img src={HarshitLogo3} alt="Harshit Portfolio's logo" className='NavLogo' />

            <nav className='navbar'>
                <ul className="navbarList">
                    <li>
                        <NavElem to="MyHero" spy={true} smooth={true} offset={0} duration={500}
                        onClick={()=>{setIsNavExpanded(!isNavExpanded)}}>
                        Home
                        </NavElem>
                    </li>

                    <li>
                        <NavElem to="PersonalInfoID" spy={true} smooth={true} offset={-140} duration={500}
                        onClick={()=>{setIsNavExpanded(!isNavExpanded)}}>
                        About
                        </NavElem>
                    </li>

                    <li>
                        <NavElem to="MyExperience" spy={true} smooth={true} offset={-140} duration={500}
                        onClick={()=>{setIsNavExpanded(!isNavExpanded)}}>
                        Experience
                        </NavElem>
                    </li>

                    <li>
                        <NavElem to="MyPortfolio" spy={true} smooth={true} offset={-140} duration={500}
                        onClick={()=>{setIsNavExpanded(!isNavExpanded)}}>
                        Portfolio
                        </NavElem>
                    </li>

                    <li>
                        <NavElem to="myContactNav" spy={true} smooth={true} offset={-140} duration={500}
                        onClick={()=>{setIsNavExpanded(!isNavExpanded)}}>
                        Contact
                        </NavElem>
                    </li>

                </ul>
            </nav>

            <div className="MobileNavbarBtn">
                <GiHamburgerMenu size={37} className='BurgerDesign' name='hambg1' onClick={()=>{
                    setIsNavExpanded(!isNavExpanded);
                }}/>
                <AiFillCloseCircle size={37} className='BurgerDesign' name='hambg2'onClick={()=>{
                    setIsNavExpanded(!isNavExpanded)}} />
            </div>

        </header>
    </div>
  )

}

const NavElem = styled(Link)`
    transition: 0.8s;
    text-decoration: none;
    cursor: pointer;

    &.active{
        text-decoration: dashed;
    }

    &:hover{
        color:white;
        font-weight: 550;
    }
`


