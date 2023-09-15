import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const TopNavStyles = styled(motion.div)`
    z-index: 20;
    top: 0;
    text-align: left;
    padding: 10px;
    width: 100%;
    font-size: calc(var(--VH)*1.5);
    @media (min-width: 500px){
        display: none;
    }
    .navbar {
        position: fixed;
        padding-left: 10px
        padding-bottom: 20px;
    }
    .navbar-item {
        display: inline;
        margin-top: 10px;
        margin-right: 10px;
    }

`
const TopNav = () => {
    return (
        <>
            <TopNavStyles>
                <nav className="navbar">
                    <ul>
                        <li className="navbar-item"><Link className="home" to="/">Home</Link></li>
                        <li className="navbar-item"><Link className="about" to="/about">About</Link></li>
                        <li className="navbar-item"><Link className="projects" to="/projects">Projects</Link></li>
                        <li className="navbar-item"><Link className="articles" to="/articles">Articles</Link></li>
                    </ul>
                </nav>


            </TopNavStyles>
        </>
    );
}

export { TopNav};