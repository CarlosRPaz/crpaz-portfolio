import React from 'react'
import './styles/Project.css'

import LaunchIcon from '@material-ui/icons/Launch';
import githubLogo from '../img/github.svg'

function Project({year, title, madeFor, codeLink, liveLink,
    react, api, firebase, stripe, nodejs, html, css, js, sass, figma, webflow, nextjs, sanity, vercel, tailwindcss, graphql, typescript}) {
    return (
        <div className='project'>
            <div className="project__year">{year}</div>
            <div className="project__title">{title}</div>
            <div className="project__madeFor">{madeFor}</div>
            <div className="project__techs">
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
                {nextjs && <div>Next.js</div>}
                {typescript && <div>Typescript</div>}
                {sanity && <div>Sanity.io</div>}
                {vercel && <div>Vercel</div>}
                {tailwindcss && <div>TailwindCSS</div>}
                {graphql && <div>QraphQL</div>}
            </div>
            <div className="project__links">
                {codeLink ?
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <img className="project__githubLogo" src={githubLogo} alt="" />
                    </a>
                    :
                    <a href='#' className='disabledCursor' onClick={(event) => event.preventDefault()}>
                        <img className="project__githubLogo disabledGHLogo" src={githubLogo} alt="" />
                    </a>
                }
                {liveLink ?
                    <a href={liveLink} target="_blank" rel="noopener noreferrer" >
                        <LaunchIcon className="project__externalLink" />
                    </a>
                    :
                    <a href='#' className='disabledCursor' onClick={(event) => event.preventDefault()}>
                        <LaunchIcon className="project__externalLink disabledExternal" />
                    </a>
                }
            </div>
        </div>
    )
}

export default Project
