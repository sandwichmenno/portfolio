import * as React from "react"
import Particles from "react-tsparticles";
import {Box} from "@chakra-ui/react";
import codeSVG from "../../images/m.svg";

const ParticleBackground = () => (
    <Box position="absolute" zIndex={-1}>
        <Particles
            id="tsparticles"
            options={{
                detectRetina: false,
                fpsLimit: 30,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onDiv: {
                            elementId: "repulse-div",
                            enable: false,
                            mode: "repulse"
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                            parallax: {
                                enable: false,
                                force: 2,
                                smooth: 10
                            }
                        },
                        resize: true
                    },
                    modes: {
                        connect: {
                            distance: 80,
                            lineLinked: {
                                opacity: 0.5
                            },
                            radius: 60
                        },
                        grab: {
                            distance: 400,
                            lineLinked: {
                                opacity: 1
                            }
                        },
                        push: {
                            quantity: 4
                        },
                        remove: {
                            quantity: 2
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        slow: {
                            active: false,
                            radius: 0,
                            factor: 1
                        }
                    }
                },
                particles: {
                    color: {
                        value: ["#3182CE", "#2D3748"]
                    },
                    lineLinked: {
                        blink: false,
                        color: "random",
                        consent: false,
                        distance: 50,
                        enable: true,
                        opacity: 0.8,
                        width: 1
                    },
                    move: {
                        attract: {
                            enable: false,
                            rotate: {
                                x: 600,
                                y: 1200
                            }
                        },
                        bounce: false,
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 0.25,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 2000
                        },
                        limit: 0,
                        value: 500
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.3,
                            speed: 2,
                            sync: false
                        },
                        random: false,
                        value: 0.8
                    },
                    size: {
                        animation: {
                            enable: false,
                            minimumValue: 0.1,
                            speed: 40,
                            sync: false
                        },
                        random: true,
                        value: 1
                    }
                },
                polygon: {
                    draw: {
                        enable: false,
                        lineColor: "rgba(255,255,255,0.2)",
                        lineWidth: 1
                    },
                    enable: true,
                    move: {
                        radius: 10
                    },
                    position: {
                        x: 50,
                        y: 50
                    },
                    inlineArrangement: "equidistant",
                    scale: 10,
                    type: "inline",
                    url: codeSVG
                },
            }}
        />
    </Box>
)

export default ParticleBackground;
