import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import Mikasa from "../assets/images/mockPictures/mikasa.png";
import NameBorder from "../assets/images/nameSliderImage.png";
import Image from "next/image";
import datas from "../mockDatas/datas.js";
import

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
    const items = slider.current.childNodes;
    items.forEach((i) => console.log(i.style.transform));
  };

  const nextClick = (e) => {
    const items = slider.current.childNodes;
    items.forEach((i) => console.log(i.style));
  };

  return (
    <>
      <div className={Style.slider} ref={slider}>
        {sliderState === []
          ? ""
          : sliderState.map((e) => {
              return (
                <div className={Style.drawItemContainer}>
                  <div className={Style.draw}>
                    <Image
                      src={`http://localhost:3000/mockPictures/${e.picture}`}
                      alt={e.name}
                      layout="fill"
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
        {/*<div className={Style.drawItemContainer}>
          <div className={Style.draw}>
            <Image src={Mikasa} alt="Mikasa" />
          </div>
          <div className={Style.drawName}>
            <Image src={NameBorder} alt="border" />
            <h3 className={Style.name}>Mikasa 1</h3>
          </div>
          <div className={Style.drawActions}></div>
        </div>
        <div className={Style.drawItemContainer}>
          <div className={Style.draw}>
            <Image src={Mikasa} alt="Mikasa" />
          </div>
          <div className={Style.drawName}>
            <Image src={NameBorder} alt="border" />
            <h3 className={Style.name}>Mikasa 2</h3>
          </div>
          <div className={Style.drawActions}></div>
        </div>
        <div className={`${Style.drawItemContainer}`}>
          <div className={Style.draw}>
            <Image src={Mikasa} alt="Mikasa" />
          </div>
          <div className={Style.drawName}>
            <Image src={NameBorder} alt="border" />
            <h3 className={Style.name}>Mikasa 3</h3>
          </div>
          <div className={Style.drawActions}></div>
        </div>
        <div className={Style.drawItemContainer}>
          <div className={Style.draw}>
            <Image src={Mikasa} alt="Mikasa" />
          </div>
          <div className={Style.drawName}>
            <Image src={NameBorder} alt="border" />
            <h3 className={Style.name}>Mikasa 4</h3>
          </div>
          <div className={Style.drawActions}></div>
        </div>
        <div className={Style.drawItemContainer}>
          <div className={Style.draw}>
            <Image src={Mikasa} alt="Mikasa" />
          </div>
          <div className={Style.drawName}>
            <Image src={NameBorder} alt="border" />
            <h3 className={Style.name}>Mikasa 5</h3>
          </div>
          <div className={Style.drawActions}></div>
        </div>*/}
      </div>
      <button onClick={prevClick}>Prev</button>
      <button onClick={nextClick}>Next</button>
    </>
  );
};

Slider.propTypes = {};

export default Slider;
