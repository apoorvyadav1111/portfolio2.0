import React from 'react';
import { motion } from 'framer-motion';
import styled from "styled-components";

const TransitionPageStyles = styled(motion.div)`
    position: absolute;
    width: calc(var(--VW) * 100);
    height: calc(var(--VH) * 100);
    top: 0;
    bottom: 0;
    right: 100%;
    pointer-events: none;
    .one, .two, .three{
      position: fixed;
    }
    .one{
      z-index: 30;
      height: 100%;
      background: linear-gradient(90deg, #04DAC6, #075483);

    }
    .two{
      z-index: 20;
      height: 100%;
      background-color: var(--black);
    }
    .three{
      z-index: 10;
      height: 100%;
      background-color: var(--white);
    }
`;

const TransitionPage = () => {
    return (
        <>
            <TransitionPageStyles>
                <motion.div
                    className='one'
                    initial={{ x:"100%", width:"100%" }}
                    animate={{ x:"0%", width:"0%", transition: { duration: 1, ease:"easeInOut" }}}
                    exit={{ x:["0%","100%"],width:["0%","100%"], transition: { duration: 1, ease:"easeInOut" } }}
                >
                </motion.div>
                <motion.div
                    className='two'
                    initial={{ x:"100%", width:"100%" }}
                    animate={{ x:"0%", width:"0%" }}
                    transition={{ delay:0.05, duration: 1, ease:"easeInOut" }}
                >
                </motion.div>
                <motion.div
                    className='three'
                    initial={{ x:"100%", width:"100%" }}
                    animate={{ x:"0%", width:"0%" }}
                    transition={{ delay:0.1, duration: 1, ease:"easeInOut" }}
                >
                </motion.div>
            </TransitionPageStyles>

        </>

    );
}
export { TransitionPage };