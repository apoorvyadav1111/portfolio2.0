import { TransitionPage } from "../components/TransitionPage"
import { ParticlesContainer } from "../components/ParticlesContainer"
import { styled } from "styled-components"
import { motion } from "framer-motion"

const NotFoundStyles = styled(motion.div)`
  position: relative;
  top: calc(var(--VW) * 10);
  justify-content: center;
  align-items: center;
  .not-found{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
      font-size: calc(var(--VH) * 6);
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0.2vw var(--neon-purple);
    }
  }
`
const NotFound = () => (
  <>
    <TransitionPage />
    <NotFoundStyles>
      <ParticlesContainer />
      <motion.div className="not-found"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1, delay: 0.1 }}

      >
        <h1>These are'nt </h1>
        <h1>the pages</h1>
        <h1>you're looking for</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0}}
        whileHover={{ scale: 1.1 , transition: { duration: 0.2 }}}
        >
        <h1><a href="/">Go Home</a></h1>
        </motion.div>
    </NotFoundStyles>
  </>
)


export {NotFound}