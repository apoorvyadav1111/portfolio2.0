import { styled } from "styled-components";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LiIcon } from "./LiIcon";
import { educationDetail, EducationDetail } from "../data/educatonDetails";

const EducationStyles = styled.div`
    margin-top: 16rem; 
    margin-bottom: 16rem;
    @media (max-width: 500px){
        margin-top: 4rem;
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
    
    .education {
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

    .education_line{
        position: absolute;
        left: 2.2rem;
        top: 0;
        width: 4px;
        transform-origin: top;
        height: 100%;
        background-color: var(--neon-purple);
        box-shadow: 0 0 10px var(--white);
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
    }

    li{
        margin-bottom: 2rem;
        margin-top: 2rem;
        text-align: left;
        &:first-child{
            margin-top: 0;
        }
        &:last-child{
            margin-bottom: 0;
        }
        width: 60%;
        display: flex;
        flex-direction: column;
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
            margin-bottom: 10vh;
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
const EduDetails = (
    {degree, major, url, time, address, name, grade, courseWork}:
    {degree: string, 
        major: string, url: string, time: string, address: string, name: string, grade: string, courseWork: string}) => {
        const ref = useRef(null);
    return <li ref={ref}>
            <LiIcon reference={ref}/>
            <motion.div
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: "spring", bounce: 0.3}}
            >
                <h3>{degree} in {major}</h3>
                <a href={url} target="_blank" rel="noreferrer">@{name}</a>
                <br/>
                <br/>
                <span>
                    {time} &nbsp; | {address}
                </span>
                <p>
                    {courseWork}
                </p>
            </motion.div>
        </li>
}
const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset:["start end", "center center"]
        }
    );
    return (
    <>
        <EducationStyles>
            <h2>Education</h2>
            <div ref={ref} className="education">
                <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="education_line" />
                <ul>
                    {educationDetail.map((edu: EducationDetail) => <EduDetails {...edu} />)}
                </ul>
            </div>
        </EducationStyles>
    </>
    )
}

export { Education };