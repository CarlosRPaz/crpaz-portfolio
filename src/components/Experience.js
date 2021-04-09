import React from 'react'
import './styles/Experience.css'

function Experience() {
    return (
        <div className="exp" id='expSection'>
            <h1>Work Experience</h1>
            <div className="exp__job">
                <div className="exp__title">Department Co-Supervisor <span>@ ASU Memorial Union</span></div>
                <div className="exp__date">April 2018 - May 2019</div>
                <ul>
                    <li>Lead managerial tasks such as equipment management, hiring and promoting, and employee disciplinary actions</li>
                    <li>Implemented new technological processes for shift efficiency</li>
                </ul>
            </div>
            <div className="exp__job">
                <div className="exp__title">Shift Supervisor <span>@ ASU Memorial Union</span></div>
                <div className="exp__date">August 2015 - April 2018</div>
                <ul>
                    <li>Lead a team of event assistants and appoint responsibilities to each crew member</li>
                    <li>Assure all room sets and side projects are performed within a given time period</li>
                    <li>Operated a team of 3-5 Event Assistants on shift to set rooms to the clients' standards</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience
