import React from "react";
import "./styles/ProjectArchiveScreen.css";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function ProjectArchiveScreen() {
  return (
    <div className="projectArchiveScreen">
      <Navbar />
      <div className="projectArchiveScreen__container" id="archiveSection">
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
            year="2022"
            title="Medium Blog Clone"
            madeFor="-"
            liveLink="https://game7-blog.web.app/"
            codeLink="https://github.com/CarlosRPaz"
            react
            nextjs
            typescript
            nodejs
            sanity
            vercel
          />
          <Project
            year="2022"
            title="Game7 Sports Blog"
            madeFor="-"
            liveLink="https://game7-blog.web.app/"
            codeLink="https://github.com/CarlosRPaz"
            react
            nodejs
            redux
            sanity
            firebase
          />
          <Project
            year="2021"
            title="Next.js Blog"
            madeFor="-"
            liveLink="https://nextjs-blog-two-phi-45.vercel.app/"
            codeLink="https://github.com/CarlosRPaz/nextjs-blog"
            nextjs
            nodejs
            sanity
            vercel
            tailwindcss
          />
          <Project
            year="2021"
            title="Book Store"
            madeFor="Client"
            liveLink="https://whenthelightdoesnotshine.com/"
            codeLink="https://github.com/CarlosRPaz/wtldns"
            react
            firebase
          />
          <Project
            year="2021"
            title="Clothing Store"
            madeFor="Client"
            liveLink="https://lonelywrld.com/"
            codeLink="https://github.com/CarlosRPaz/lonelywrld"
            react
            api
            firebase
            stripe
          />
          <Project
            year="2021"
            title="Netflix Clone"
            madeFor="-"
            liveLink="https://netflix-clone-e5f91.web.app/"
            codeLink="https://github.com/CarlosRPaz/netlfix-clone"
            react
            api
            firebase
            stripe
          />
          <Project
            year="2021"
            title="LinkedIn Clone"
            madeFor="-"
            liveLink="https://linkedin-clone-56a5c.web.app/"
            codeLink="https://github.com/CarlosRPaz/LinkedIn-Clone"
            react
            firebase
          />
          <Project
            year="2021"
            title="Amazon Clone"
            madeFor="-"
            liveLink="https://challenge-4e2fc.web.app/"
            codeLink="https://github.com/CarlosRPaz/amazon-clone"
            react
            firebase
            stripe
          />
          <Project
            year="2021"
            title="Esports Portfolio Website"
            madeFor="-"
            liveLink="https://www.n-stack.gg/landing"
            codeLink="https://github.com/CarlosRPaz/n-stack-project"
            react
            api
            firebase
            nodejs
            figma
          />
          <Project
            year="2021"
            title="Personal Portfolio v2"
            madeFor="-"
            liveLink="https://crpaz-portfolio.webflow.io/"
            webflow
          />
          <Project
            year="2020"
            title="Dev Social Media"
            madeFor="-"
            codeLink="https://github.com/CarlosRPaz/Dev-Social-Media"
            react
            nodejs
          />
          <Project
            year="2019"
            title="Photography Portfolio"
            madeFor="Client"
            liveLink="https://matthewgarcia.netlify.app/"
            codeLink="https://github.com/CarlosRPaz/MatthewGarciaPortfolio"
            html
            css
            js
          />
          <Project
            year="2019"
            title="Personal Portfolio v1"
            madeFor="-"
            liveLink="https://carlosrpaz.github.io/"
            codeLink="https://github.com/CarlosRPaz/carlosrpaz.github.io"
            html
            js
            css
          />
          <Project
            year="2019"
            title="Zastik Shoe Store"
            madeFor="ASU"
            liveLink="https://crpaz-zastik-unofficial.netlify.app/"
            codeLink="https://github.com/CarlosRPaz/Zastik"
            html
            css
          />
          <Project
            year="2019"
            title="Pacific Trails Resort"
            madeFor="ASU"
            liveLink="https://crpaz-pacifictrails.netlify.app/index.html"
            codeLink="https://github.com/CarlosRPaz/PacificTrailsResort"
            html
            css
          />
          <Project
            year="2018"
            title="Comic Website"
            madeFor="ASU"
            liveLink="https://funguy.netlify.app/index.html"
            codeLink="https://github.com/CarlosRPaz/FunGuy"
            html
            css
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectArchiveScreen;
