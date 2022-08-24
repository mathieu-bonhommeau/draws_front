import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import Image from "next/image";
import ArrowLeft from "../assets/images/arrow-left.png";
import ArrowRight from "../assets/images/arrow-right.png";
import DrawHomeSlider from "./DrawHomeSlider";
import CommentHomeSlider from "./CommentHomeSlider";

const Slider = ({ datas, itemComponent }) => {
  const [sliderState, setSliderState] = useState([]);

  const [itemPositionXY, setItemPositionXY] = useState({
    start: null,
    inProgress: null,
    end: null
  })

  const [touchPosition, setTouchPosition] = useState({
    start: null,
    inProgress: null,
    end: null
  })


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
  }, []);


  useEffect(() => {
    setItemPositionXY({
      ...itemPositionXY,
      inProgress: (touchPosition.inProgress - touchPosition.start)/* + itemPositionXY.start*/
    })
  }, [touchPosition.inProgress])


  const slider = useRef();

  const handleTouchStart = (e) => {
    setTouchPosition({
      ...touchPosition,
      start: e.changedTouches[0].pageX
    })
    setItemPositionXY({
      ...itemPositionXY,
      start: e.target.getBoundingClientRect().x
    })

  }

  const handleTouchMove = (e) => {
    setTouchPosition({
      ...touchPosition,
      inProgress: e.changedTouches[0].pageX
    })
  }

  console.log(itemPositionXY, '1')
  console.log(touchPosition, '2')

  /*const prevClick = (e) => {
    setSliderState(
      [...sliderState].map((e) => {
        return {
          ...e,
          actualPosition: e.actualPosition === 0 ? 9 : e.actualPosition - 1,
        };
      })
    );
  };*/

  /*const nextClick = (e) => {
    setSliderState(
      [...sliderState].map((e) => {
        return {
          ...e,
          actualPosition: e.actualPosition === 9 ? 0 : e.actualPosition + 1,
        };
      })
    );
  };*/

  // Génération du slider en fonction du composant récupérer en props
  const generateSlider = (e, i) => {
    return itemComponent = {
      ...itemComponent,
      key: i,
      props: {
        ...itemComponent.props,
        item: e,
        index: i,
        touchEvents: {handleTouchMove, handleTouchStart},
        itemPositionXY: itemPositionXY
      }
    }
  };

  return (
    <>
      <div
        className={`${Style.slider} `}
        ref={slider}
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
