import React from "react";
import Style from "../styles/Footer.module.scss";
import PropTypes from "prop-types";
import homeIcon from "../assets/images/home-icon.png";
import galleryIcon from "../assets/images/gallery-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import menuIcon from "../assets/images/menu-icon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div>
        <Image
          src={homeIcon}
          alt="Icone accueil"
          width={30}
          height={30}
        ></Image>
      </div>
      <div>
        <Image
          src={galleryIcon}
          alt="Icone gallery"
          width={30}
          height={30}
        ></Image>
      </div>
      <div>
        <Image src={mailIcon} alt="Icone mail" width={30} height={30}></Image>
      </div>
      <div>
        <Image src={menuIcon} alt="Icone menu" width={30} height={30}></Image>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
