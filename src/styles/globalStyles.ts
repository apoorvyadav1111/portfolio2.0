import {createGlobalStyle} from "styled-components";
import { Fonts } from "../styles/fonts";

const GlobalStyles = createGlobalStyle`
    ${Fonts}

    :root{
        --black: #121224;
        --burlywood: #f6c9a0;
        --grey: #866c55;
        --neon-blue: #03dac5;
        --white: #ffffff;
        --neon-purple: #03dac5;
        --neon-pink: #D648D7;
        --purple: #bb86fc;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, a{
        color: var(--neon-purple);
    }


    h1, h2, h3, h4, a{
        font-family: Monument;
    }

    li{
        list-style: none;
    }

    img{
        width: 100%;
        display: block;
    }

    html{
        cursor: none;
        min-height: -webkit-fill-available;
    }


    body{
        font-family:   Grotesk;
        background-color: var(--black);
        color: var(--white);
        isolation: isolate;
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }

    p{
        font-family:   Grotesk;
        font-weight: 400;
        font-size: calc(var(--VW)*1.5);
        word-spacing: calc(var(--VW) *0.2);
        line-height: 120%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        @media (hover: none) and (pointer: coarse) and (max-width: 500px) {
            font-size: calc(var(--VW)*5);
            word-spacing: calc(var(--VW) *0.5);
        }
    }

    a{
        color: inherit;
        text-decoration: none;
        font-weight: 500;
        text-transform: uppercase;
        mix-blend-mode: difference;
        outline: none;
        &:hover{
            -webkit-text-fill-color: var(--neon-purple);
            cursor: none;
        }
    }
    .particles{
        width: 100vw;
        height: 100vh;
        position: absolute;
        z-index: -1;
    }

`

export {GlobalStyles}