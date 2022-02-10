import React from 'react'
import './styles/Footer.css'

import { Link } from "react-router-dom";

import liLogo from './../img/linkedIn.svg'
import ghLogo from './../img/githubLight.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__externalLinks">
                    <a href="https://www.linkedin.com/in/carlos-r-paz/" target="_blank" rel="noopener noreferrer">
                        <img src={liLogo} className='logo' alt="" />
                    </a>
                    <a href="https://github.com/CarlosRPaz" target="_blank" rel="noopener noreferrer">
                        <img src={ghLogo} className='logo' alt="" />
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__links">
                    <div className='footer__linksContainer'>
                        <div><a href="/#aboutSection">About Me</a></div>
                        <div><a href="/#featSection">Featured Projects</a></div>
                        <div><a href="/#expSection">Work Experience</a></div>
                        <div><a href="/#contactSection">Contact Me</a></div>
                        <Link to='/projectarchive' className='projectArchiveLink'>
                            Project Archive
                        </Link>
                    </div>
                </div>
                <div className="footer__links">
                    <div className='footer__linksContainer'>
                        <div><a href="https://github.com/CarlosRPaz" target="_blank" rel="noopener noreferrer">Github</a></div>
                        <div><a href="https://codepen.io/crpaz" target="_blank" rel="noopener noreferrer">CodePen</a></div>
                        <div><a href="https://www.linkedin.com/in/carlos-r-paz/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                        <div><a href="https://www.dropbox.com/s/bexvwzu1kjl3j7e/Resume%20-%20Carlos%20Paz%20-%20Web.pdf?dl=0" target="_blank" rel="noopener noreferrer">Resume</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
