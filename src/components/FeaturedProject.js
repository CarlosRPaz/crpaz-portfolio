import React from 'react'
import './styles/FeaturedProject.css'
import LaunchIcon from '@material-ui/icons/Launch';

import githubLogo from '../img/github.svg'

function FeaturedProject({title, backIMG, desc, techs, codeLink, liveLink,
    react, api, firebase, stripe, nodejs, html, css, js, sass, figma, webflow, typescript}) {
    return (
        <div className="featuredProject">
            <div className="featuredProject__img" style={{backgroundImage: `url(${backIMG})`}}></div>
            <div className="featuredProject__info">
                <h4>Featured Project</h4>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="featuredProject__infoTechs">
                    {react && <div>React</div>}
                    {api && <div>API</div>}
                    {firebase && <div>Firebase</div>}
                    {stripe && <div>Stripe</div>}
                    {nodejs && <div>Node.js</div>}
                    {html && <div>HTML</div>}
                    {css && <div>CSS</div>}
                    {js && <div>JavaScript</div>}
                    {sass && <div>SCSS</div>}
                    {figma && <div>Figma</div>}
                    {webflow && <div>Webflow</div>}
                    {typescript && <div>Typescript</div>}
                </div>
                <div className="featuredProject__infoLinks">
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <img className="githubLogo" src={githubLogo} alt="" />
                    </a>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <LaunchIcon className="externalLink" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject
