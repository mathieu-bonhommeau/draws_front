import Style from "../styles/DrawHomeSlider.module.scss";
import NameBorder from "../assets/images/nameSliderImage.png";
import sliderItemsStyle from "../utils/sliderItemsStyle";
import Image from "next/image";
import Link from "next/link";
import SeeIcon from "../assets/images/seeIcon.svg";
import Like from "./Like";
import {useEffect, useState} from "react";

const DrawHomeSlider = ({ item, index, touchEvents, itemPositionXY }) => {

  const [styleItem, setStyleItem] = useState(sliderItemsStyle.find((el) => item.actualPosition === el.position))
  console.log(styleItem)
  useEffect(() => {
    if (itemPositionXY.inProgress !== 0 && styleItem.position === 4) {
      console.log(styleItem.transform)
      setStyleItem({
        ...styleItem,
        style: {
          ...styleItem.style,
          transform: `translateX(${itemPositionXY.inProgress}px)`,
          transition: ""
        }
      })
    }

  }, [itemPositionXY])

  return (
    <div
      className={Style.drawItemContainer}
      style={styleItem.style}
      key={item.id + "-" + index}
      onTouchStart={touchEvents.handleTouchStart}
      onTouchMove={touchEvents.handleTouchMove}
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
