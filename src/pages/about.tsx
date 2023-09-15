import { TransitionPage } from "../components/TransitionPage";
import { SideNav } from "../components/SideNav";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { styled } from "styled-components";
import { TopNav } from "../components/TopNav";
import { motion } from "framer-motion";

const AboutStyles = styled(motion.div)`
    @media (max-width: 500px) {
        width: 100vw;
        height: 100vh;
    }
    justify-content: center;
    align-items: center;
    `;
const About = () => {
    return (
        <>
        <TransitionPage />
        <ParticlesContainer/>
        <AboutStyles>
            <SideNav />
            <TopNav />
            <Experience />
            <Education  />
            <Skills />
        </AboutStyles>
        </>
    )
}

export {
    About
}; 