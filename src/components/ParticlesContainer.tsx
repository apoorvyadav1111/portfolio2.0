import { Particles } from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import React,{useCallback} from 'react';

const ParticlesContainer = () => {
    const particlesInit = useCallback(async(engine:any) => {
        await loadFull(engine);
    },[]);

    const particlesLoaded = useCallback(async () => {},[]);
    return <Particles 
        className='particles'
        id='tsparticles' 
        init={particlesInit} 
        loaded={particlesLoaded} 
        options={{
            fullScreen: {
                enable: true,
                zIndex: 0,
                
            },
            fpsLimit: 120,
            background: {
                color: {
                    value: ''
                }
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    push:{
                        quantity: 10,
                        
                    },
                    repulse: {
                        distance: 150,
                        duration: 0.9
                    },
                }
            },
            particles: {
                twinkle: {
                    particles: {
                        enable: true,
                        frequency: 0.005,
                        opacity: 1
                    }
                },
                color:{
                    value: '#03dac5'
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 1000
                    },
                    value: 130
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value:{
                        min:1,
                        max:3
                    }
                }
            },
            detectRetina: true
        }}
        />
}

export { ParticlesContainer }