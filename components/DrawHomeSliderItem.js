import Style from "../styles/DrawHomeSlider.module.scss";
import NameBorder from "../assets/images/nameSliderImage.png";
import Image from "next/image";
import Link from "next/link";
import SeeIcon from "../assets/images/seeIcon.svg"
import Like from "./Like";

const DrawHomeSliderItem = ({item, styleByPosition, index}) => {

  return (
    <div
      className={Style.drawItemContainer}
      style={
        styleByPosition.find(
          (el) => item.actualPosition === el.position
        ).style
      }
      key={item.id + "-" + index}
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
            <Image src={SeeIcon} width="18" height="18" alt="Voir le dessin"/>
            Voir
          </a>
        </Link>
      </div>
    </div>
  );
};

DrawHomeSliderItem.propTypes = {};

export default DrawHomeSliderItem;
