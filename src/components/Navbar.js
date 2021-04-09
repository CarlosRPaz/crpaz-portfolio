import React, { useState, useRef } from 'react'
import './styles/Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import LaunchIcon from '@material-ui/icons/Launch';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';


import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <Link to='/' className="navbar__name">
                <h1>Carlos Paz</h1>
                <h3>Software Developer</h3>
            </Link>
            <div className="navbar__links">
                <a href="/#aboutSection" >About</a>
                <a href="/#featSection" >Projects</a>
                <a href="/#expSection" >Experience</a>
                <a href="/#contactSection" >Contact</a>
                <a
                    href="https://www.dropbox.com/s/bexvwzu1kjl3j7e/Resume%20-%20Carlos%20Paz%20-%20Web.pdf?dl=0" className="navbar__resumeButton"
                    target="_blank" rel="noopener noreferrer">
                    <LaunchIcon className="navbar__resumeButton__externalIcon" />
                    Resume
                </a>
            </div>

            <button className="navbar__button" onClick={() => setOpen(!open)}>
                <MenuIcon className="menuIcon" />
            </button>
            {open &&
                <div className='subNav__underlay' onClick={() => setOpen(!open)}>
                    <div className='subNav'>
                        <ul>
                            <li>
                                <div className='subNav__link'>
                                    <a
                                        href="/#aboutSection"
                                        onClick={() => setOpen(!open)}>
                                        <AccountBoxIcon className='subNav__icon' />
                                        About
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='subNav__link'>
                                    <a
                                        href="/#featSection"
                                        onClick={() => setOpen(!open)}>
                                        <AssignmentIcon className='subNav__icon' />
                                        Projects
                                </a>
                                </div>
                            </li>
                            <li>
                                <div className='subNav__link'>
                                    <a
                                        href="/#expSection"
                                        onClick={() => setOpen(!open)}>
                                        <WorkIcon className='subNav__icon' />
                                        Experience
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='subNav__link'>
                                    <a
                                        href="/#contactSection"
                                        onClick={() => setOpen(!open)}>
                                        <EmailIcon className='subNav__icon' />
                                        Contact
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='subNav__link'>
                                    <a
                                        href="https://www.dropbox.com/s/bexvwzu1kjl3j7e/Resume%20-%20Carlos%20Paz%20-%20Web.pdf?dl=0"
                                        target="_blank" rel="noopener noreferrer"
                                        onClick={() => setOpen(!open)}
                                        className="subNav__resumeButton">
                                        <LaunchIcon className='subNav__icon' />
                                        Resume
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar
