import styled from "styled-components";
import { TransitionPage } from "../components/TransitionPage";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeImg from "../assets/images/self.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartArea, faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, fab } from "@fortawesome/free-brands-svg-icons";
import { ParticlesContainer } from "../components/ParticlesContainer";
library.add(fas);
library.add(fab);


const HomepageStyles = styled(motion.div)`
    width: calc(var(--VW) * 99);
    height: calc(var(--VH) * 99);
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
        width: 100vw;
        height: 100vh
    }
    .icon {
        font-size: calc(var(--VW) * 3);
        * {
          color: var(--neon-purple);
        }
    }
    .icon:hover {
        * {
            color: var(--white);
        }
    }

    .left {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 500px) {
            width: 100%;
        }
        &-top {
            top: 0;
            .name{
                h1{
                    font-size: calc(var(--VW) * 10);
                    text-transform: uppercase;
                    line-height: 9vw;
                    height: 7vw;
                    margin: 1rem;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke: 0.2vw var(--neon-purple);
                    @media (max-width: 500px) {
                        font-size: calc(var(--VH) * 6);
                        text-align: left;
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }
        &-descriptions{
            display: none;
            @media (max-width: 500px) {
                display: block;
                text-align: left;
            }
            p{
                @media (max-width: 500px) {
                    font-size: 18px;
                }   
            }
          }
        &-bottom {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            max-height: 50vh;
            position: relative;
            top: 1%;
            .side-nav{
                overflow: hidden;
                text-align: left;
                justify-content: space-between;
                .side-nav__item{
                    font-size: calc(var(--VW) * 4);
                    a{
                        display: inline-block;
                        font-size: 20;
                        line-height: calc(var(--VW) * 6);
                        height: calc(var(--VW) * 6);
                        @media (max-width: 500px) {
                            font-size: calc(var(--VH) * 3);
                            line-height: calc(var(--VH) * 3);
                            height: calc(var(--VH) * 3);
                          }
                    }
                    
                }
            }
            .social-links{
                display: none;
                @media (max-width: 500px) {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                }
                a{
                    margin: 0 1vw;
                    display: inline-block;
                    font-size: calc(var(--VW) * 4);
                    svg{
                        pointer-events: none;
                        font-size: calc(var(--VW) * 10);
                        &:hover {
                            color: var(--burlywood);
                            background-color: var(--black);
                          }
                        }
                }
            }
        }
    }
    .right {
        padding: 3vw;
        margin-right: 1vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: calc(var(--VW) * 40);
        @media (max-width: 500px) {
            display: none;
        }
        &-top {
            padding: auto;
            .pic{
                width: auto;
                height: 40vh;
                overflow: hidden;
                border-radius: 1rem;
            }
        }
        &-mid {
            text-align: justify;
        }
        &-bottom {
            bottom: 5vh;
            .social-links{
                display: flex;
                justify-content: space-between;
                width: 100%;
                a{
                    margin: 0 1vw;
                    display: inline-block;
                    font-size: calc(var(--VW) * 1);
                    svg{
                        pointer-events: none;
                        &:hover {
                            color: var(--burlywood);
                            background-color: var(--black);
                          }
                        }
                }
            }
        }
    }

`;
const Home = () => {
    return (
        <>
        <TransitionPage />
        <ParticlesContainer />
        <HomepageStyles>
        <div className="left">
            <div className="left-top">
                <div className="name">
                    <h1>
                    Apoorv 
                    </h1>
                    <h1>
                    Yadav
                    </h1>
                </div>
            </div>
            <div className="left-descriptions">
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ease:"easeInOut", duration: 1, delay: 0.9 }}
                >
                    I am a computer science graduate student, 
                    interested in Full Stack Development, Machine Learning and Data Science.
                    I have a passion for building things and contribute to products that 
                    help the community. Being an avid learner, I look forward to new challenges
                    and all the opportunities to learn and grow. I am looking for a full time roles 
                    as a Software Developer starting May 2024.
                </motion.p>
          </div>
            <div className="left-bottom">
                <motion.div className="side-nav">
                    <motion.div
                        className="side-nav__item"
                        initial={{  y: 0 , x:0 }}
                        animate={{ y: [-1, 2, -1],x:[1,-2,1], transition: { repeat:Infinity, yoyo: Infinity, duration: 3 }  }}
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                        whileHover={{ scale: 1.01, transition: { ease:"easeInOut", duration: 0.2 } }}
                        >
                        <Link to="/about">
                            About
                        </Link>
                    </motion.div>
                    <motion.div
                        className="side-nav__item"
                        initial={{ y: 0 , x:0 }}
                        animate={{ y: [-1, 2, -1],x:[-1,1,-1], transition: { repeat:Infinity, yoyo: Infinity, duration: 3 }  }}
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                        whileHover={{ scale: 1.01, transition: { ease:"easeInOut", duration: 0.2 } }}
                        >
                        <Link to="/projects">
                            Projects
                        </Link>
                    </motion.div>
                    <motion.div
                        className="side-nav__item"
                        initial={{   y: 0 , x:0 }}
                        animate={{ y: [1, -2, 1], x:[-1,2,-1], transition: { repeat:Infinity, spring: Infinity, duration: 3 } }}
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                        whileHover={{ scale: 1.01, transition: { ease:"easeInOut", duration: 0.2 } }}
                        >
                        <Link to="/articles">
                            Articles
                        </Link>
                    </motion.div>
                </motion.div>
                <div className="social-links">
                    <motion.a 
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="https://www.github.com/apoorvyadav1111" 
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="https://www.linkedin.com/in/yadavapoorv/" 
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="https://public.tableau.com/profile/apoorv.yadav#!/" 
                        target="_blank">
                        <FontAwesomeIcon icon={faChartArea} className="icon"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="mailto:ayadav7@binghamton.edu" 
                        target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    </motion.a>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="right-top">
                <motion.div
                    whileHover={{ scale: 1.02, transition: { duration: 0.5 }}}
                    initial={{  y: 0 , x:0 }}
                    // animate={{ y: [6,-6, 6],x:[3,-3,3], transition: { repeat:Infinity, yoyo: Infinity, duration: 3 }  }}

                >
                    <img src={homeImg} alt="image" className="pic"/>
                </motion.div>
            </div>
            <div className="right-mid">
                <p>
                    I am a computer science graduate student, 
                    interested in Full Stack Development, Machine Learning and Data Science.
                    I have a passion for building things and contribute to products that 
                    help the community. Being an avid learner, I look forward to new challenges
                    and all the opportunities to learn and grow. I am looking for a full time roles 
                    as a Software Developer starting May 2024.
                </p>
            </div>
            <div className="right-bottom">
                <div className="social-links">
                    <motion.a 
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="https://www.github.com/apoorvyadav1111" 
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="https://www.linkedin.com/in/yadavapoorv/" 
                        target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="https://public.tableau.com/profile/apoorv.yadav#!/" 
                        target="_blank">
                        <FontAwesomeIcon icon={faChartArea} className="icon"/>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
                        href="mailto:ayadav7@binghamton.edu" 
                        target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    </motion.a>
                </div>
            </div>
        </div>
        </HomepageStyles>
        </>

    )
}

export {
    Home
}; 