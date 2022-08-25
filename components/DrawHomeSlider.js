import Style from "../styles/DrawHomeSlider.module.scss";
import NameBorder from "../assets/images/nameSliderImage.png";
import sliderItemsStyle from "../utils/sliderItemsStyle";
import Image from "next/image";
import Link from "next/link";
import SeeIcon from "../assets/images/seeIcon.svg";
import Like from "./Like";
import {useEffect, useState} from "react";
import generateStyleForSliderItem from "../utils/StyleItemGenerator";

const DrawHomeSlider = ({ item, index, touchEvents, itemPositionXY }) => {

  const [styleItem, setStyleItem] = useState(sliderItemsStyle.find((el) => item.actualPosition === el.position))

  const [startPosition, setStartPosition] = useState({x: 0, z:0})

  useEffect(() => {
    setStyleItem(sliderItemsStyle.find((el) => item.actualPosition === el.position))
  }, [item])

  useEffect(() => {
    setStartPosition({
      tx: styleItem.style.transform.translate.x,
      tz: styleItem.style.transform.translate.z,
      ry: styleItem.style.transform.rotate.y
    })
  }, []);

  useEffect(() => {
    if (itemPositionXY.inProgress !== 0 && styleItem.position === 4) {
      console.log(styleItem)
      console.log(startPosition.tz, itemPositionXY.inProgress)
      setStyleItem({
        ...styleItem,
        style: {
          ...styleItem.style,
          transform: {
            ...styleItem.style.transform,
            translate: {
              x: startPosition.tx + itemPositionXY.inProgress,
              z: startPosition.tz * itemPositionXY.inProgress * 0.012 > startPosition.tz ? startPosition.tz : startPosition.tz * itemPositionXY.inProgress * 0.012
            },
            rotate: {
              y: startPosition.ry + itemPositionXY.inProgress / 30
            }
          },
          transition: ""
        }
      })
    }

  }, [itemPositionXY])
  console.log(generateStyleForSliderItem(styleItem.style))
  return (
    <div
      className={Style.drawItemContainer}
      style={generateStyleForSliderItem(styleItem.style)}
      key={item.id + "-" + index}
      onTouchStart={touchEvents.handleTouchStart}
      onTouchMove={touchEvents.handleTouchMove}
      onTouchEnd={touchEvents.handleTouchEnd}
    >
      <div className={Style.draw}>
        <Image
          src={`/mockPictures/${item.picture}`}
          alt={item.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={Style.drawName}>
        <Image src={NameBorder} alt="border" />
        <h3 className={Style.name}>{item.name}</h3>
      </div>
      <div className={Style.drawActions}>
        <Like />
        <Link href="#">
          <a className="arrow-link opacity50">
            <Image src={SeeIcon} width="18" height="18" alt="Voir le dessin" />
            Voir
          </a>
        </Link>
      </div>
    </div>
  );
};

DrawHomeSlider.propTypes = {};

export default DrawHomeSlider;
