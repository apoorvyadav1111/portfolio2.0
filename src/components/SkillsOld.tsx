import { styled } from "styled-components";
import { motion, useScroll } from "framer-motion";

const SkillsStyles = styled.div`

    h2 {
        font-weight: bold;
        font-size: calc(var(--VH) * 9);
        margin-top: 4rem;
        width: 100%;
        height: 100%;
        text-align: center;
    }    
    .skill_container{
        width: calc(var(--VW) * 80);
        height: calc(var(--VH) * 100);
        left: calc(var(--VW) * 10);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: repeating-radial-gradient(#03dac500 0px ,#03dac5A0 0px, #12121200 5px, #12121200 100px);
    }
    .skill_type{
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        font-size: calc(var(--VH) * 5);
        font-weight: bold;
        &-nested{
            font-size: calc(var(--VH) * 3);
            font-weight: normal;
        }
    }
`;

const Skill = ({name, x,y}:{name:string, x:string, y:string}) => {
    return (
        <motion.div className="skill_type-nested"
            initial={{x:"0", y:"0"}}
            animate={{x:x, y:y}}
            transition={{duration: 1,type: "spring", bounce: 0.1, delay:0.5}}
        >
            {name}
        </motion.div>
    )
}
const Skills = () => (
    <>
        <SkillsStyles>
            <h2>Skills</h2>
            <div className="skill_container">
                <motion.div className="skill_type"
                    initial={{x:"0", y:"0"}}
                    animate={{x:"30vw", y:"20vh"}}
                    transition={{duration: 1,type: "spring", bounce: 0.1, delay:0.5}}
                >
                    Web
                </motion.div>
                    <Skill name="ReactJS" x="30vw" y="10vh"/>
                    <Skill name="NodeJS" x="20vw" y="30vh"/>
                    <Skill name="MongoDB" x="20vw" y="30vh"/>
                <motion.div className="skill_type"
                    initial={{x:"0", y:"0"}}
                    animate={{x:"-10vw", y:"-20vh"}}
                    transition={{duration: 1,type: "spring", bounce: 0.1, delay:0.5}}
                >
                    Languages
                </motion.div>
                    <Skill name="MySQL" x="-12vw" y="-22vh"/>
                    <Skill name="Python" x="-10vw" y="-15vh"/>
                    <Skill name="Java" x="-12vw" y="-25vh"/>
                <motion.div className="skill_type"
                    initial={{x:"0", y:"0"}}
                    animate={{x:"10vw", y:"-20vh"}}
                    transition={{duration: 1,type: "spring", bounce: 0.1, delay:0.5}}
                >
                    Big Data
                </motion.div>
                <motion.div className="skill_type"
                    initial={{x:"0", y:"0"}}
                    animate={{x:"-30vw", y:"20vh"}}
                    transition={{duration: 1,type: "spring", bounce: 0.1, delay:0.5}}
                >
                    Database
                </motion.div>



            </div>
        </SkillsStyles>
    </>
)

export { Skills };