/*export const sliderItemsStyles = [
    {
        position: 0,
        style: {
            opacity: 0,
        },
    },
    {
        position: 1,
        style: {
            transform:
                "perspective(200px) translateZ(-375px) translateX(-550px)",
            opacity: 0,
            transition: "transform ease 0.5s, opacity 0.3s ease",
        },
    },
    {
        position: 2,
        style: {
            transform:
                "perspective(200px) translateZ(-250px) translateX(-800px) rotateY(-20deg)",
            opacity: 1,
            transition: "transform ease 0.5s, opacity 0.3s ease 0.2s",
        },
    },
    {
        position: 3,
        style: {
            transform:
                "perspective(200px) translateZ(-100px) translateX(-355px) rotateY(-10deg)",
            opacity: 1,
            transition: "transform ease 0.5s",
        },
    },
    {
        position: 4,
        style: {
            transform: "perspective(200px) translateZ(-25px)",
            opacity: 1,
            transition: "transform ease 0.5s",
        },
    },
    {
        position: 5,
        style: {
            transform:
                "perspective(200px) translateZ(-100px) translateX(355px) rotateY(10deg)",
            opacity: 1,
            transition: "transform ease 0.5s",
        },
    },
    {
        position: 6,
        style: {
            transform:
                "perspective(200px) translateZ(-250px) translateX(800px) rotateY(20deg)",
            opacity: 1,
            transition: "transform ease 0.5s, opacity 0.3s ease 0.2s",
        },
    },
    {
        position: 7,
        style: {
            transform: "perspective(200px) translateZ(-450px) rotateY(40deg)",
            opacity: 0,
            transition: "transform ease 1s, opacity ease 0.2s",
        },
    },
    {
        position: 8,
        style: {
            opacity: 0,
        },
    },
    {
        position: 9,
        style: {
            opacity: 0,
        },
    },
];*/

const sliderItemsStyle = [
    {
        position: 0,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 0,
                    z: 0
                },
                rotate: {
                    y: 0
                }
            },
            opacity: 0,
            transition: {
                transform: {
                    timingFunction: "",
                    duration: 0
                },
                opacity: {
                    timingFunction: "",
                    duration: 0
                }
            }
        },
    },
    {
        position: 1,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: -550,
                    z: -375
                },
                rotate: {
                    y: 0
                }
            },
            opacity: 0,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 0.5
                },
                opacity: {
                    timingFunction: "ease",
                    duration: 0.3
                }
            }
        },
    },
    {
        position: 2,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: -800,
                    z: -250
                },
                rotate: {
                    y: -20
                }
            },
            opacity: 1,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 0.5
                },
                opacity: {
                    timingFunction: "ease",
                    duration: 0.3,
                    delay: 0.2
                }
            }
        },
    },
    {
        position: 3,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: -355,
                    z: -100
                },
                rotate: {
                    y: -10
                }
            },
            opacity: 1,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 0.5
                },
                opacity: {
                    timingFunction: "",
                    duration: 0
                }
            }
        },
    },
    {
        position: 4,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 0,
                    z: -25
                },
                rotate: {
                    y: 0
                }
            },
            opacity: 1,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 0.5
                },
                opacity: {
                    timingFunction: "",
                    duration: 0
                }
            }
        },
    },
    {
        position: 5,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 355,
                    z: -100
                },
                rotate: {
                    y: 10
                }
            },
            opacity: 1,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 0.5
                },
                opacity: {
                    timingFunction: "",
                    duration: 0
                }
            }
        },
    },
    {
        position: 6,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 800,
                    z: -250
                },
                rotate: {
                    y: 20
                }
            },
            opacity: 1,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 0.5
                },
                opacity: {
                    timingFunction: "ease",
                    duration: 0.3,
                    delay: 0.2
                }
            }
        },
    },
    {
        position: 7,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 0,
                    z: -450
                },
                rotate: {
                    y: 40
                }
            },
            opacity: 0,
            transition: {
                transform: {
                    timingFunction: "ease",
                    duration: 1
                },
                opacity: {
                    timingFunction: "ease",
                    duration: 0.2
                }
            }
        },
    },
    {
        position: 8,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 0,
                    z: 0
                }
                ,
                rotate: {
                    y: 0
                }
            },
            opacity: 0,
            transition: {
                transform: {
                    timingFunction: "",
                    duration: 0
                },
                opacity: {
                    timingFunction: "0",
                    duration: 0
                }
            }
        },
    },
    {
        position: 9,
        style: {
            transform: {
                perspective: 200,
                translate: {
                    x: 0,
                    z: 0
                },
                rotate: {
                    y: 0
                }
            },
            opacity: 0,
            transition: {
                transform: {
                    timingFunction: "",
                    duration: 0
                },
                opacity: {
                    timingFunction: "0",
                    duration: 0
                }
            }
        },
    },
];

export default sliderItemsStyle;