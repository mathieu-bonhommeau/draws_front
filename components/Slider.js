import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import sliderItemsStyle from "../utils/sliderItemsStyle";
import Style from "../styles/DrawHomeSlider.module.scss";
import Image from "next/image";
import ArrowLeft from "../assets/images/arrow-left.png";
import ArrowRight from "../assets/images/arrow-right.png";
import DrawHomeSliderItem from "./DrawHomeSliderItem";
import CommentsHomeSlider from "./CommentsHomeSlider";

const Slider = ({sliderType, datas}) => {
    const [sliderState, setSliderState] = useState([]);
    const [styleByPosition, setStyleByPosition] = useState(
        sliderItemsStyle
    );

    // A remplacer par get staticProps ou une autre en fonction du besoin
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
                            sliderType === "draws" && <DrawHomeSliderItem item={e} styleByPosition={styleByPosition} index={i} key={i}/> ||
                            sliderType === "comments" && <CommentsHomeSlider item={e} styleByPosition={styleByPosition} index={i} key={i}/>
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

Slider.propTypes = {

};

export default Slider;
