import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import NameBorder from "../assets/images/nameSliderImage.png";
import Image from "next/image";
import datas from "../mockDatas/datas.js";

const styleByPosition = [
    {
        position: 0,
        style: {
            transform: "perspective(200px) translateZ(-250px) translateX(305px) rotateY(-100deg)",
            transition: "transform ease 1s, opacity ease 1s"
        }
    },{
        position: 1,
        style: {
            transform: "perspective(200px) translateZ(-100px) translateX(10px) rotateY(-35deg)",
            transition: "transform ease 1s, opacity ease 1s"
        }
    },{
        position: 2,
        style: {
            transform: "perspective(200px) translateZ(-25px)",
            transition: "transform ease 1s, opacity ease 1s"
        }
    },{
        position: 3,
        style: {
            transform: "perspective(200px) translateZ(-100px) translateX(-10px) rotateY(35deg)",
            transition: "transform ease 1s, opacity ease 1s"
        }
    },{
        position: 4,
        style: {
            transform: "perspective(200px) translateZ(-250px)  translateX(-305px) rotateY(100deg)",
            transition: "transform ease 1s, opacity ease 1s"
        }
    }
]

const Slider = (props) => {

  const [sliderState, setSliderState] = useState([]);

  useEffect(() => {
    setSliderState(
      datas.map((d, i) => {
        return {
          ...d,
          position: i,
        };
      })
    );
  }, []);

  console.log(sliderState);
  const slider = useRef();

  const prevClick = (e) => {
      setSliderState([...sliderState].map(e => {
          return {
              ...e,
              position: e.position === 0 ? 4 : e.position - 1
          }
      }))
  };

  const nextClick = (e) => {
    setSliderState([...sliderState].map(e => {
        return {
            ...e,
            position: e.position === 4 ? 0 : e.position + 1
    }
    }))
  };

  return (
    <>
      <div className={Style.slider} ref={slider}>
        {sliderState === []
          ? ""
          : sliderState.map((e) => {
              return (
                <div className={Style.drawItemContainer} style={styleByPosition.find(el => e.position === el.position).style} key={e.id}>
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
