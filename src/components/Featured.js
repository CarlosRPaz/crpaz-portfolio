import React from 'react'
import './styles/Featured.css'
import { Link } from "react-router-dom";
import FeaturedProject from './FeaturedProject';

import AC from '../img/AC_IMG1.PNG'
import LIC from '../img/LI_IMG1.png'
import NC from '../img/N_IMG1.png'

function Featured() {
    return (
        <div className="feat" id='featSection'>
            <h1>Featured Projects</h1>
            <div className="feat__container">
                <FeaturedProject
                    title="Netflix Clone"
                    backIMG={NC}
                    desc="A Netflix Clone built using React and Firebase (database, user authentication, hosting, Stripe extension). The site uses The Movie Database API to have access to millions of movies and TV shows."
                    codeLink='https://github.com/CarlosRPaz/netlfix-clone'
                    liveLink='https://netflix-clone-e5f91.web.app/'

                    react={true}
                    api={true}
                    firebase={true}
                    stripe={true}
                    nodejs={false}
                    html={false}
                    css={false}
                    sass={false}
                    js={false}
                    figma={false}
                    webflow={false}
                />
                <FeaturedProject
                    title="LinkedIn Clone"
                    backIMG={LIC}
                    desc="This LinkedIn Clone was built using React and uses Firebase for its database, user authentication, and hosting. Redux is used to access a userSlice with user login and logout reducer functions. React Hooks also make for a dynamic front-end."
                    codeLink='https://github.com/CarlosRPaz/LinkedIn-Clone'
                    liveLink='https://linkedin-clone-56a5c.web.app/'

                    react={true}
                    api={false}
                    firebase={true}
                    stripe={false}
                    nodejs={false}
                    html={false}
                    css={false}
                    sass={false}
                    js={false}
                    figma={false}
                    webflow={false}
                />
                <FeaturedProject
                    title="Amazon Clone"
                    backIMG={AC}
                    desc="A full-stack Amazon Clone created with React. I implemented a fully functioning store and user authentication. I also deployed using Firebase, along with a Firebase database."
                    codeLink='https://github.com/CarlosRPaz/amazon-clone'
                    liveLink='https://challenge-4e2fc.web.app/'

                    react={true}
                    api={false}
                    firebase={true}
                    stripe={true}
                    nodejs={false}
                    html={false}
                    css={false}
                    sass={false}
                    js={false}
                    figma={false}
                    webflow={false}
                />
            </div>

            <div className="feat__buttonContainer">
                <Link to='/projectarchive' className='projectArchiveButton'>
                    <button>View Project Archive</button>
                </Link>
            </div>
        </div>
    )
}

export default Featured
