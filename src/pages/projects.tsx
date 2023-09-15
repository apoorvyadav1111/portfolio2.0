import React from 'react'
import { ParticlesContainer } from '../components/ParticlesContainer'
import { SideNav } from '../components/SideNav'
import { TransitionPage } from '../components/TransitionPage'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { featuredProject, projects, ProjectType } from '../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGolang } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleDown, faArrowPointer, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { TopNav } from '../components/TopNav'

const ProjectStyles = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 4rem;
  a:hover{
    color: var(--neon-purple);
  }
  .title{
    font-size: calc(var(--VH)*8);
    padding-top: 2rem;
    padding-bottom: 4rem;
    @media (max-width: 500px){
      font-size: calc(var(--VH)*6);
      padding-top: 2rem;
      padding-left: 1rem;
    }
  }
  .grid{
    padding: 4rem;
    display: grid;
    @media (max-width: 500px){
      padding: 2rem;
    }
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 6rem; 
    .first{
      grid-column: span 12 / span 12;
    }
    .second{
      grid-column: span 6 / span 12;
      @media (max-width: 500px){
        grid-column: span 12 / span 12;
      }
    }
    .second-featured{
      display: none;
      grid-column: span 12 / span 12;
      @media (max-width: 500px){
        display: block;
      }

  }

  .featured-project{
    @media (max-width: 500px){
      display:none
    }
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
    background: rgba(255,255,255,0.1);
    img{
      grid-column: span 2 / span 3;
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }
    .content{
      grid-column: span 1 / span 3;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: justify;
      justify-content: space-between;
      h1{
        font-size: calc(var(--VH)*3);
        margin-bottom: 1rem;
      }
      h5{
        font-size: calc(var(--VH)*0.5);
        margin-bottom: 1rem;
      }
      .links{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }
      .tags{
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-wrap: wrap;
        .tag{
          padding: 4px 8px;
          font-family: 'Monospace',monospace;
          margin: 4px;
          border-radius: 4px;
          border: 1px solid var(--neon-purple);
          font-size: calc(var(--VH)*1.5);
        }
      }
      a{
        margin-top: 1rem;
        display: inline-block;
        font-size: calc(var(--VW) * 1.5);
        svg{
            pointer-events: none;
            &:hover {
                color: var(--neon-purple);
                background-color: var(--black);
              }
            }
        }
    }
    a:hover{
      color: var(--neon-purple);
    }
  }
  .project-card{
    width: 100%;
    height: calc(var(--VH)*60);
    @media (max-width: 500px){
      height: auto;
      width: 95%;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
    background: rgba(255,255,255,0.1);
    img{
      width: 100%;
      border-radius: 1rem;
      height: auto;
    }
    &-content{
      width: 100%;
      padding: 1rem;
      justify-content: space-between;
      align-items: center;
      h1{
        font-size: calc(var(--VH)*3);
        @media (max-width: 500px){
          font-size: calc(var(--VH)*2);
        }
      }
      h5{
        font-size: calc(var(--VH)*1);
        margin-bottom: 1rem;
      }
      .links{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }
      .tags{
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-wrap: wrap;
        .tag{
          padding: 4px 8px;
          font-family: 'Monospace',monospace;
          margin: 4px;
          border-radius: 4px;
          border: 1px solid var(--neon-purple);
          font-size: calc(var(--VH)*1.5);
        }
      }
      a{
        margin-top: 1rem;
        font-size: calc(var(--VH) * 1.5);
        svg{
            pointer-events: none;
            &:hover {
                color: var(--neon-purple);
                background-color: var(--black);
            }
          }
        }
    }
`

const FeaturedProjectCard = ({project}:{project: ProjectType}) => {
  return (
    <article className='featured-project'>
      <img src={project.image} alt={project.name} /> 
      <div className='content'>
        <h1>{project.name}</h1>
        <span><h3>{project.type}</h3></span>
        <p>{project.description}</p>
        <div className='tags'>
          {project.tags.map(tag => (
            <span className='tag'>{tag}</span>
          ))}
        </div>
        <div className='links'>
          <span>
          <motion.a 
            whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
            href={project.url} 
            target="_blank">
              Visit
          </motion.a>
          </span>
          <span>
          <motion.a 
            whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
            href={project.github} 
            target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
          </motion.a>
          </span>

        </div>
      </div>
    </article>
  )
}

const ProjectCard = ({project}:{project: ProjectType}) => {
  return (
    <article className='project-card'>
      <img src={project.image} alt={project.name} /> 
      <div className='project-card-content'>
          <h1>{project.name}</h1>
        <div className='tags'>
          {project.tags.slice(0,5).map(tag => (
            <span className='tag'>{tag}</span>
          ))}
        </div>
        <motion.div className='links'>
          <span>
          <motion.a 
            whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
            href={project.url} 
            target="_blank">
              Visit
          </motion.a>
          </span>
          <span>
          <motion.a 
            whileHover={{ scale: 1.2 , transition: { duration: 0.2 }}}
            href={project.github} 
            target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon"/>
          </motion.a>
          </span>

        </motion.div>
      </div>
    </article>
  )
}
const Project = () => {
  return (
    <>
      <TransitionPage />
      <ParticlesContainer />
      <ProjectStyles>
      <SideNav />
      <TopNav />
      <motion.h1 
        className='title'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}  
      >
        Projects
      </motion.h1>
      <div className='grid'>
        <motion.div
          className='first'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.5}} 
        >
          <FeaturedProjectCard project={featuredProject} />
        </motion.div>
        <motion.div
          className='second-featured'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1.5}} 
        >
          <ProjectCard project={featuredProject} />
        </motion.div>
        {projects.map(project => (
          <motion.div
          className='second'
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.9}}
          whileInView={{opacity: 1, y: 0}}
          >
            <ProjectCard project={project} />
            </motion.div>
            ))}  
      </div>
      </ProjectStyles>
    </>
  )
}

export {Project}