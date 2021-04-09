import React from 'react'
import './styles/SubNav.css'
import { Link } from 'react-scroll'

import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function SubNav({ open }) {

    return (
        <div className='subNav'>
            <ul>
                <li>
                    <div className='subNav__link'>
                        <a href="/#aboutSection"><AccountBoxIcon className='subNav__icon' />About</a>
                    </div>
                </li>
                <li>
                    <div className='subNav__link'>
                        <a href="/#featSection"><AssignmentIcon className='subNav__icon' />Projects</a>
                    </div>
                </li>
                <li>
                    <div className='subNav__link'>
                        <a href="/#expSection"><WorkIcon className='subNav__icon' onClick={open => !open} />Experience</a>
                    </div>
                </li>
                <li>
                    <div className='subNav__link'>
                        <a href="/#contactSection"><EmailIcon className='subNav__icon' />Contact</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SubNav
