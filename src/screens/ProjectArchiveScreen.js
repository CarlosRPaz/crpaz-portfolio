import React from 'react'
import './styles/ProjectArchiveScreen.css'
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Footer from '../components/Footer';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function ProjectArchiveScreen() {
    return (
        <div className='projectArchiveScreen'>
            <Navbar />
            <div className='projectArchiveScreen__container' id='archiveSection'>
                <h1>Project Archive</h1>
                <div className="projectArchiveScreen__labels">
                    <div className="projectArchiveScreen__year">Year</div>
                    <div className="projectArchiveScreen__title">Title</div>
                    <div className="projectArchiveScreen__madeFor">Made for</div>
                    <div className="projectArchiveScreen__techs">Built with</div>
                    <div className="projectArchiveScreen__links">Links</div>
                </div>

                <div className="projectArchiveScreen__list">
                    <Project
                        year="2021"
                        title="Netflix Clone"
                        madeFor="-"
                        liveLink="https://netflix-clone-e5f91.web.app/"
                        codeLink="https://github.com/CarlosRPaz/netlfix-clone"

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
                    <Project
                        year="2021"
                        title="LinkedIn Clone"
                        madeFor="-"
                        liveLink="https://linkedin-clone-56a5c.web.app/"
                        codeLink="https://github.com/CarlosRPaz/LinkedIn-Clone"

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
                    <Project
                        year="2021"
                        title="Amazon Clone"
                        madeFor="-"
                        liveLink="https://challenge-4e2fc.web.app/"
                        codeLink="https://github.com/CarlosRPaz/amazon-clone"

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
                    <Project
                        year="2021"
                        title="Esports Portfolio Website"
                        madeFor="-"
                        liveLink="https://www.n-stack.gg/landing"
                        codeLink="https://github.com/CarlosRPaz/n-stack-project"

                        react={true}
                        api={true}
                        firebase={true}
                        stripe={false}
                        nodejs={true}
                        html={false}
                        css={false}
                        sass={false}
                        js={false}
                        figma={true}
                        webflow={false}
                    />
                    <Project
                        year="2021"
                        title="Personal Portfolio v2"
                        madeFor="-"
                        liveLink="https://crpaz-portfolio.webflow.io/"

                        react={false}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={false}
                        html={false}
                        css={false}
                        sass={false}
                        js={false}
                        figma={false}
                        webflow={true}
                    />
                    <Project
                        year="2020"
                        title="Dev Social Media"
                        madeFor="-"
                        codeLink="https://github.com/CarlosRPaz/Dev-Social-Media"

                        react={true}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={true}
                        html={false}
                        css={false}
                        sass={false}
                        js={false}
                        figma={false}
                        webflow={false}
                    />
                    <Project
                        year="2019"
                        title="Photography Portfolio"
                        madeFor="Client"
                        liveLink="https://matthewgarcia.netlify.app/"
                        codeLink="https://github.com/CarlosRPaz/MatthewGarciaPortfolio"

                        react={false}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={false}
                        html={true}
                        css={true}
                        sass={false}
                        js={true}
                        figma={false}
                        webflow={false}
                    />
                    <Project
                        year="2019"
                        title="Personal Portfolio v1"
                        madeFor="-"
                        liveLink="https://carlosrpaz.github.io/"
                        codeLink="https://github.com/CarlosRPaz/carlosrpaz.github.io"

                        react={false}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={false}
                        html={true}
                        css={false}
                        sass={true}
                        js={true}
                        figma={false}
                        webflow={false}
                    />
                    <Project
                        year="2019"
                        title="Zastik Shoe Store"
                        madeFor="ASU"
                        liveLink="https://crpaz-zastik-unofficial.netlify.app/"
                        codeLink="https://github.com/CarlosRPaz/Zastik"

                        react={false}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={false}
                        html={true}
                        css={true}
                        sass={false}
                        js={false}
                        figma={false}
                        webflow={false}
                    />
                    <Project
                        year="2019"
                        title="Pacific Trails Resort"
                        madeFor="ASU"
                        liveLink="https://crpaz-pacifictrails.netlify.app/index.html"
                        codeLink="https://github.com/CarlosRPaz/PacificTrailsResort"

                        react={false}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={false}
                        html={true}
                        css={true}
                        sass={false}
                        js={false}
                        figma={false}
                        webflow={false}
                    />
                    <Project
                        year="2018"
                        title="Comic Website"
                        madeFor="ASU"
                        liveLink="https://funguy.netlify.app/index.html"
                        codeLink="https://github.com/CarlosRPaz/FunGuy"

                        react={false}
                        api={false}
                        firebase={false}
                        stripe={false}
                        nodejs={false}
                        html={true}
                        css={true}
                        sass={false}
                        js={false}
                        figma={false}
                        webflow={false}
                    />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ProjectArchiveScreen
