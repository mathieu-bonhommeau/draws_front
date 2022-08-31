import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import Image from "next/image";
import ArrowLeft from "../assets/images/arrow-left.png";
import ArrowRight from "../assets/images/arrow-right.png";
import DrawHomeSlider from "./DrawHomeSlider";

const Slider = ({ datas, itemComponent }) => {
  const [sliderState, setSliderState] = useState([]);
  const [touchPosition, setTouchPosition] = useState({
    start: null,
    inProgress: null,
  });

  const slider = useRef();

  // A remplacer par get staticProps ou une autre en fonction du besoin
  // useEffect pour adapter le tableau de données pour le slider
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
  }, [datas]);

  const handleTouchStart = (e) => {
    setTouchPosition({
      ...touchPosition,
      start: e.changedTouches[0].pageX,
    });
  };

  const handleTouchMove = (e) => {
    setTouchPosition({
      ...touchPosition,
      inProgress: e.changedTouches[0].pageX,
    });
  };

  const handleTouchEnd = () => {
    if (touchPosition.inProgress < touchPosition.start) {
      prevClick();
    } else {
      nextClick();
    }
  };

  const prevClick = () => {
    setSliderState(
      [...sliderState].map((e) => {
        return {
          ...e,
          actualPosition: e.actualPosition === 0 ? 9 : e.actualPosition - 1,
        };
      })
    );
  };

  const nextClick = () => {
    setSliderState(
      [...sliderState].map((e) => {
        return {
          ...e,
          actualPosition: e.actualPosition === 9 ? 0 : e.actualPosition + 1,
        };
      })
    );
  };

  // Génération du slider en fonction du composant récupérer en props
  const generateSlider = (e, i) => {
    return (itemComponent = {
      ...itemComponent,
      key: i,
      props: {
        ...itemComponent.props,
        item: e,
        index: i,
      },
    });
  };

  return (
    <>
      <div
        className={`${Style.slider} 
           ${itemComponent.type.name === "DrawHomeSlider" && Style.sliderDraw} 
           ${
             itemComponent.type.name === "CommentHomeSlider" &&
             Style.sliderComment
           }`}
        ref={slider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sliderState === []
          ? ""
          : sliderState.map((e, i) => {
              return generateSlider(e, i);
            })}
      </div>
      {/*<div className={Style.prevNextButtons}>
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
      </div>*/}
    </>
  );
};

Slider.propTypes = {};

export default Slider;
