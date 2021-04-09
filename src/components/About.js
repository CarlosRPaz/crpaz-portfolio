import React from 'react'
import './styles/About.css'

import htmlLogo from '../img/html.png'
import cssLogo from '../img/css.png'
import sassLogo from '../img/sass.png'
import reactLogo from '../img/react.png'
import firebaseLogo from '../img/firebase.png'
import jsLogo from '../img/javascript.png'
import reduxLogo from '../img/redux.svg'
import nodejsLogo from '../img/nodejs.png'
import figmaLogo from '../img/figma.png'
import stripeLogo from '../img/stripe.png'

function About() {

    return (
        <div className="about" id="aboutSection" >
            <h1>About Me</h1>
            <p>
                Hello! I'm Carlos, a Software Developer based in Los Angeles, CA. I enjoy and specialize in building websites and applications. My goal is to build products and improve on technology to have positive impacts on people's lives.‍
            </p>
            <p>
                I graduated with my Bachelor of Arts in Interdisciplinary Studies (with focuses in Informatics and Computer Gaming) at <a href="https://www.asu.edu/" target="_blank" rel="noopener noreferrer">Arizona State University</a>, December of 2020. As I search for a career that fits my goals, I continue to expand my knowledge about Front-End web development, programming languages, and web design.‍
            </p>
            <p>
                Here are a few technologies I've been working with recently:
            </p>
            <div className="about__techs">
                <div><img src={reactLogo} alt="React Logo" />React</div>
                <div><img src={jsLogo} alt="JavaScript Logo" />JavaScript</div>
                <div><img src={reduxLogo} alt="Redux Logo" />Redux</div>
                <div><img src={nodejsLogo} alt="Nodejs Logo" />Node.js</div>
                <div><img src={htmlLogo} alt="HTML Logo" />HTML</div>
                <div><img src={cssLogo} alt="CSS Logo" />CSS</div>
                <div><img src={sassLogo} alt="Sass Logo" />Sass</div>
                <div><img src={firebaseLogo} alt="Firebase Logo" />Firebase</div>
                <div><img src={stripeLogo} alt="Stripe Logo" />Stripe</div>
                <div><img src={figmaLogo} alt="Figma Logo" />Figma</div>
            </div>
        </div>
    )
}

export default About
