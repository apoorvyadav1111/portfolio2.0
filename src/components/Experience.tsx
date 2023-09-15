import { styled } from "styled-components";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";
import { workEx, WorkEx } from "../data/workEx";

const ExperienceStyles = styled.div`
    margin-top: 4rem; 
    margin-bottom: 16rem;


    @media (max-width: 500px){
        margin-bottom: 4rem;
    }
    h2 {
        font-weight: bold;
        font-size: calc(var(--VH) * 9);
        margin-bottom: 8rem;
        width: 100%;
        text-align: center;
        @media (max-width: 500px){
            font-size: calc(var(--VH) * 4);
            margin-bottom: 4rem;
        }
    }
    
    .experience {
        width: calc(var(--VW) * 60);
        margin-left: auto;
        margin-right: auto;
        position: relative;
        left: calc(var(--VW) * 10);
        @media (max-width: 500px){
            width: auto;
            left: calc(var(--VW) * 2);
        }
    }

    .experience_line{
        position: absolute;
        left: 2.2rem;
        top: 0;
        width: 4px;
        transform-origin: top;
        height: 100%;
        background-color: var(--neon-purple);
        box-shadow: 0 0 10px var(--neon-purple);
        @media (max-width: 500px){
            left: calc(var(--VW) * 1);
        }
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-left: 8vw;
        justify-content: space-between;
        @media (max-width: 500px){
            width: calc(var(--VW) * 70);

        }
    }

    li{
        margin-bottom: 2rem;
        margin-top: 2rem;
        @media (max-width: 500px){
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
        &:first-child{
            margin-top: 0;
        }
        &:last-child{
            margin-bottom: 0;
        }
        width: 60%;
        @media (max-width: 500px){
            width: 100%;
        }
        .details{
            width: 100%;
            text-align: left;
        }
        h3 {
            font-weight: bold;
            font-size: calc(var(--VH) * 2);
            @media (max-width: 500px){
                font-size: calc(var(--VH) * 1.5);
            }
        }
        span{
            font-size: calc(var(--VH) * 2);
            text-transform: capitalize;
            opacity: 0.7;
            margin-bottom: 1rem;
            @media (max-width: 500px){
                font-size: calc(var(--VH) * 1.5);
            }
        }
        p{
            font-size: calc(var(--VH) * 2);
            font-weight: medium;
            color: var(--white);
            opacity: 0.9;
            text-align: justify;
            @media (max-width: 500px){
                font-size: calc(var(--VH) * 1.5);
            }
        }

    }
`;
const Details = (
    {position, company, companyLink, time, address, work}
    :{position: string, company: string, companyLink: string, time: string, address: string, work: string }) => {
        const ref = useRef(null);
    return <li ref={ref}>
            <LiIcon reference={ref}/>
            <motion.div
                className="details"
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: "spring", bounce: 0.3}}
            >
                <h3>{position}</h3>
                <a href={companyLink} target="_blank" rel="noreferrer">@{company}</a>
                <br/>
                <br/>
                <span>
                    {time} &nbsp;| {address}
                </span>
                <p>
                    {work}
                </p>
            </motion.div>
        </li>
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    );
    return (
    <>
        <ExperienceStyles>
            <h2>Experience</h2>
            <div ref={ref} className="experience">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="experience_line" />
                <ul>
                    {workEx.map((work: WorkEx) => <Details {...work} />)}
                </ul>
            </div>

        </ExperienceStyles>
    </>
    )
}

export { Experience };