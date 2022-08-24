const sliderItemsStyle = [
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
];

export default sliderItemsStyle;