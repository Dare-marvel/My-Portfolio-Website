import type { OutMode } from "@tsparticles/engine";
import type { MoveDirection } from "@tsparticles/engine";

const starryNightConfig = {
    fullScreen: {
        enable: false,
    },
    background: {
        color: {
            value: "#000000",
        },
        gradient: {
            enable: true,
            stops: [
                { offset: 0, color: "#000000" },
                { offset: 0.5, color: "#001a00" },
                { offset: 1, color: "#000000" }
            ]
        }
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
                area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 0.2,
                minimumValue: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
            },
        },
        links: {
            enable: false,
            distance: 150,
            color: "#00ff77",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.2,
            direction: "none" as MoveDirection,
            random: true,
            straight: false,
            outModes: {
                default: "out" as OutMode,
            },
            bounce: false,
            trail: {
                enable: false,
                length: 0,
                fillColor: "#ffffff"
            }
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "connect",
            },
            onClick: {
                enable: true,
                mode: "trail", // Changed to trail mode for shooting star effect
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            connect: {
                distance: 150,
                links: {
                    opacity: 0.5,
                    color: "#00ff99",
                    width: 1
                },
                radius: 150
            },
            trail: {
                delay: 0.1,
                quantity: 1,
                particles: {
                    move: {
                        speed: 20, // Faster speed for shooting star
                        outModes: {
                            default: "destroy" as OutMode
                        },
                        straight: true,
                        direction: "random" as MoveDirection
                    },
                    size: {
                        value: 3
                    },
                    opacity: {
                        value: 1
                    },
                    links: {
                        enable: false
                    },
                    life: {
                        duration: {
                            value: 1 // Short lifespan for shooting effect
                        },
                        count: 1
                    },
                    trail: {
                        enable: true,
                        length: 50,
                        fillColor: "#00ff88"
                    }
                }
            },
            bubble: {
                distance: 200,
                size: 3.5,
                duration: 2,
                opacity: 1,
                speed: 3,
            },
        },
    },
    detectRetina: true,
};

export default starryNightConfig;