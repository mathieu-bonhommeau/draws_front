import React from "react";
import PropTypes from "prop-types";
import Style from "../styles/CommentsHomeSlider.module.scss";
import sliderItemsStyle from "../utils/sliderItemsStyle";
import Image from "next/image";
import star from "../assets/images/star.png";

const CommentHomeSlider = ({ item, index, handleMouseDown }) => {
  return (
    <div
      className={Style.commentItemContainer}
      style={
        sliderItemsStyle.find((el) => item.actualPosition === el.position).style
      }
      key={item.id + "-" + index}
      onMouseDown={handleMouseDown}
    >
      <div className={Style.profilPicture}>
        <Image
          src={`/mockPictures/${item.picture}`}
          alt="Photo de profil"
          width="70"
          height="70"
          objectFit="cover"
        />
      </div>
      <div className={Style.commentContent}>
        <h3 className={Style.userName}>{item.name}</h3>
        <p className={Style.text}>{item.comment}</p>
        {[...Array(item.stars)].map((e, i) => {
          return (
            <Image
              src={star}
              alt="Photo de profil"
              width="10"
              height="10"
              objectFit="cover"
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

CommentHomeSlider.propTypes = {};

export default CommentHomeSlider;
