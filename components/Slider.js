import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import NameBorder from "../assets/images/nameSliderImage.png";
import Image from "next/image";
import datas from "../mockDatas/datas.js";

const initialStyleForPosition = [
  {
    position: 0,
    style: {
      transform:
        "perspective(200px) translateZ(-300px) translateX(-790px) rotateY(-200deg)",
      opacity: 0,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 1,
    style: {
      transform:
        "perspective(200px) translateZ(-375px) translateX(-550px) rotateY(-190deg)",
      opacity: 0,
      /*transition: "transform ease 1s, opacity ease 1s",*/
    },
  },
  {
    position: 2,
    style: {
      transform:
        "perspective(200px) translateZ(-250px) translateX(-700px) rotateY(-20deg)",
      opacity: 1,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 3,
    style: {
      transform:
        "perspective(200px) translateZ(-100px) translateX(-305px) rotateY(-10deg)",
      opacity: 1,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 4,
    style: {
      transform: "perspective(200px) translateZ(-25px)",
      opacity: 1,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 5,
    style: {
      transform:
        "perspective(200px) translateZ(-100px) translateX(305px) rotateY(10deg)",
      opacity: 1,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 6,
    style: {
      transform:
        "perspective(200px) translateZ(-250px) translateX(700px) rotateY(20deg)",
      opacity: 1,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 7,
    style: {
      transform: "perspective(200px) translateZ(-450px) rotateY(180deg)",
      opacity: 0,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 8,
    style: {
      transform:
        "perspective(200px) translateZ(-375px) translateX(550px) rotateY(190deg)",
      opacity: 0,
      transition: "transform ease 1s, opacity ease 1s",
    },
  },
  {
    position: 9,
    style: {
      transform:
        "perspective(200px) translateZ(-300px) translateX(790px) rotateY(200deg)",
      opacity: 0,
      /*transition: "transform ease 1s, opacity ease 1s",*/
    },
  },
];

const Slider = (props) => {
  const [sliderState, setSliderState] = useState([]);

  const [styleByPosition, setStyleByPosition] = useState(
    initialStyleForPosition
  );
  console.log(styleByPosition);
  useEffect(() => {
    const adaptDatasForSlider = [
      datas[3],
      datas[4],
      ...datas,
      datas[0],
      datas[1],
      datas[2],
    ];
    setSliderState(
      [...adaptDatasForSlider].map((d, i) => {
        return {
          ...d,
          actualPosition: i,
        };
      })
    );
  }, []);

  const slider = useRef();

  const prevClick = (e) => {
    setSliderState(
      [...sliderState].map((e) => {
        return {
          ...e,
          actualPosition: e.actualPosition === 0 ? 9 : e.actualPosition - 1,
        };
      })
    );
  };

  const nextClick = (e) => {
    setSliderState(
      [...sliderState].map((e) => {
        return {
          ...e,
          actualPosition: e.actualPosition === 9 ? 0 : e.actualPosition + 1,
        };
      })
    );
  };

  return (
    <>
      <div className={Style.slider} ref={slider}>
        {sliderState === []
          ? ""
          : sliderState.map((e, i) => {
              return (
                <div
                  className={Style.drawItemContainer}
                  style={
                    styleByPosition.find(
                      (el) => e.actualPosition === el.position
                    ).style
                  }
                  key={e.id + "-" + i}
                >
                  <div className={Style.draw}>
                    <Image
                      src={`/mockPictures/${e.picture}`}
                      alt={e.name}
                      width={250}
                      height={350}
                    />
                  </div>
                  <div className={Style.drawName}>
                    <Image src={NameBorder} alt="border" />
                    <h3 className={Style.name}>{e.name}</h3>
                  </div>
                  <div className={Style.drawActions}></div>
                </div>
              );
            })}
      </div>
      <button onClick={prevClick}>Prev</button>
      <button onClick={nextClick}>Next</button>
    </>
  );
};

Slider.propTypes = {};

export default Slider;
