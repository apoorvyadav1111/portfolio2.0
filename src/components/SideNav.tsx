import styled from "styled-components";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const StyledSideNav = styled(motion.div)`
    @media (max-width: 768px){
        display: none;
    }
    .home, .projects, .articles, .about{
        position: fixed;
        z-index: 20;
        left: 4vw;
    }

    .home{
        top: 2vw;
        left: 2vw;
        width: 4.2vw;
        height: 3.2vw;
        mix-blend-mode: normal;
        svg{
            width: 100%;
            height: 100%;
            pointer-events: none;
            color: var(--black);
        }
    }

    .projects, .about, .articles{
        transition: 0.3s all ease;
        transform: rotate(90deg);
        transform-origin: 0% 0%;
        font-size: calc(var(--VW) *1.2);
        :hover{
            -webkit-text-stroke: 0.1vw var(--black);
        }
    }

    .bottom{
        transition: 0.3s all ease;
        transform: rotate(90deg);
        transform-origin: 0% 0%;
        bottom: 8vw;
    }
    .projects{
        bottom: 20vw;
    }

    .articles{
        bottom: 8vw;
    }

    .about{
        bottom: 30vw;
    }


`

const SideNav = () => {
    return (
        <StyledSideNav>
            <Link className="home" to="/">Home</Link>
            <Link className="about" to="/about">About</Link>
            <Link className="projects" to="/projects">Projects</Link>
            <Link className="articles" to="/articles">Articles</Link>
        </StyledSideNav>
    );
};

export { SideNav };