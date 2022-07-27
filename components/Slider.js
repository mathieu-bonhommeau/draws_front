import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Style from "../styles/Slider.module.scss";
import Mikasa from "../assets/images/mikasa.png";
import NameBorder from "../assets/images/nameSliderImage.png";
import Image from "next/image";

const Slider = (props) => {
  return (
    <div className={Style.slider}>
      <div className={Style.drawItemContainer + " draw1"}>
        <div className={Style.draw}></div>
        <div className={Style.drawName}></div>
        <div className={Style.drawActions}></div>
      </div>
      <div className={Style.drawItemContainer + " draw2"}>
        <div className={Style.draw}></div>
        <div className={Style.drawName}></div>
        <div className={Style.drawActions}></div>
      </div>
      <div className={Style.drawItemContainer + " draw3"}>
        <div className={Style.draw}>
          <Image src={Mikasa} className={Style.draw} />
          <Image src={NameBorder} />
        </div>
        <div className={Style.drawName}></div>
        <div className={Style.drawActions}></div>
      </div>
      <div className={Style.drawItemContainer + " draw4"}>
        <div className={Style.draw}></div>
        <div className={Style.drawName}></div>
        <div className={Style.drawActions}></div>
      </div>
      <div className={Style.drawItemContainer + " draw5"}>
        <div className={Style.draw}></div>
        <div className={Style.drawName}></div>
        <div className={Style.drawActions}></div>
      </div>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
