import { styled } from "styled-components";
import { motion } from "framer-motion";
import { SkillType, skills } from "../data/skill";

const SkillsContainer = styled(motion.div)`
    padding-bottom: 5rem;
    .info-main {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        width: calc(var(--VW) * 50);
        text-align: left;
        left: calc(var(--VW) * 10);
        @media (max-width: 500px) {
            width: calc(var(--VW) * 90);
            left: calc(var(--VW) * 5);
        }
        h2 {
            text-align: left;
            font-size: calc(var(--VH) * 3);
            @media (hover: none) and (pointer: coarse), (max-width: 500px) {
                font-size: calc(var(--VH) * 2);
            }

        }
        p {
          margin-bottom: 3vw;
          @media (max-width: 500px) {
            font-size: calc(var(--VH) * 1.5);
            margin-bottom: 5vw;
            display: flex;
            flex-direction: column;
          }
          :last-child {
            margin-bottom: 0;
          }
        }
      }
    h2 {
        font-weight: bold;
        font-size: calc(var(--VH) * 9);
        margin-top: 4rem;
        width: 100%;
        height: 100%;
        text-align: center;
        @media (max-width: 500px){
            font-size: calc(var(--VH) * 4);
        }
    }    
`;

const Skill = ({name, skills}:{name: string, skills: string[]}) => {
    return (
        <motion.div
        initial={{x:-100, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{ease: [0.6, -0.05, 0.01, 0.9], duration: 0.6}}
        viewport={{ once: true }}
        >
            <h2>{name}</h2>
            <p>{skills.join(', ')}</p>
        </motion.div>
    )
}
const Skills = () => {
    return (
        <>
            <SkillsContainer>
                <h2>Skills</h2>
                <div className="info-main">
                {skills.map((skill: SkillType) => <Skill name={skill.name} skills={skill.skills} />)}
                </div>
            </SkillsContainer>
        </>
    )
}

export { Skills };