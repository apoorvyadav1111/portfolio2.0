import styled from "styled-components";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const StyledSideNav = styled(motion.div)`
    @media (max-width: 500px){
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
        @media (hover: none) and (max-width: 500px){
            width: 8vw;
            height: 7vw;
        }
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
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            font-size: calc(var(--VW) *3);
        }
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
        @media (hover: none) and (pointer: coarse), (max-width: 500px){
            bottom: 13.5vw;
        }
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