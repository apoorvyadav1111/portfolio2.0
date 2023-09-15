import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'

const FigureStyles = styled.div`
    .figure{
        position: absolute;
        left: 0;
        stroke: var(--neon-purple);
        @media (max-width: 500px){
            display: none;
        }
    }

    .svg_icon{
        rotate: -90deg;
        transform: translate(4px, 0%    );
    }
    circle{
        stroke-width: 0px;
    }
    .first{
        fill:transparent;
        stroke-width: 0px;
    }
    .second{
        stroke-width: 3px;
        stroke: var(--neon-purple);
    }
    .last{
        fill: var(--neon-purple);
    }
`
const LiIcon = ({reference}:{reference: any}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset:["center end", "center center"]
        }
    );
  return (
    <FigureStyles>
    <figure className='figure'>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg_icon" height="75" width="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className='first'/>
            <motion.circle cx="75" cy="50" r="18" className='second'
                style={{pathLength: scrollYProgress}}
            />
            <circle cx="75" cy="50" r="10" className='last'/>
        </svg>
    </figure>
    </FigureStyles>

  )
}
export { LiIcon };
