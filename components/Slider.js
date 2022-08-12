import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import NameBorder from "../assets/images/nameSliderImage.png";
import Image from "next/image";
import datas from "../mockDatas/datas.js";
import ArrowRight from "../assets/images/arrow-right.png";
import ArrowLeft from "../assets/images/arrow-left.png";

const initialStyleForPosition = [
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

const Slider = (props) => {
  const [sliderState, setSliderState] = useState([]);

  const [styleByPosition, setStyleByPosition] = useState(
    initialStyleForPosition
  );

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
                      width="100%"
                      height="100%"
                      layout="fill"
                      objectFit="cover"
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
      <div className={Style.prevNextButtons}>
        <button className="arrow-link" onClick={nextClick}>
          <Image
            src={ArrowLeft}
            height={20}
            width={20}
            alt="Image précédente"
          />
        </button>
        <button className="arrow-link" onClick={prevClick}>
          <Image src={ArrowRight} height={20} width={20} alt="Image suivante" />
        </button>
      </div>
    </>
  );
};

Slider.propTypes = {};

export default Slider;
