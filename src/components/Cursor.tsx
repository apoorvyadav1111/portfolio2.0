import {faCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const IconStyle = styled(motion.div)`
    pointer-events: none;
    position:fixed;
    padding: 0;
    margin: 0;
    opacity: 0.9;
    transform: translate(-50%, -50%) rotate(10deg);
    z-index: 20;
    @media (hover: none) and (pointer: coarse), (max-width: 500px){
        display: none;
    }
    &.on-link{
        opacity: 0.01
    }
`

const Cursor = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [hideCursor, setHideCursor] = useState(false);
    const updateMouse = (e: Event) => {
        // you can directly access the mouse's position in `e`
        // you don't even need the useMouse hook
        if((e.target as HTMLElement).tagName==="A"){
            setHideCursor(true);
        }else{
            setHideCursor(false);
        }
        setX((e as MouseEvent).clientX)
        setY((e as MouseEvent).clientY)
      }

      useEffect(() => {
            window.addEventListener('mousemove', updateMouse)
            return () => {
                window.removeEventListener('mousemove', updateMouse)
            }
        })
    return <>
    <IconStyle
        className={hideCursor? "on-link" : ""}
        style={{
            top:y,
            left:x,
        }}
    >
        <FontAwesomeIcon icon={faCircle} size="1x" color="#03dac5"  />
    </IconStyle>
    </>
}
export { Cursor};