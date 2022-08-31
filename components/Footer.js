import React from "react";
import Style from "../styles/Footer.module.scss";
import PropTypes from "prop-types";
import homeIcon from "../assets/images/home-icon.png";
import galleryIcon from "../assets/images/gallery-icon.png";
import mailIcon from "../assets/images/mail-icon.png";
import menuIcon from "../assets/images/menu-icon.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.imgContainer}>
        <Link href="/">
          <a>
            <Image
              src={homeIcon}
              alt="Icone accueil"
              width={80}
              height={80}
            ></Image>
          </a>
        </Link>
      </div>
      <div className={Style.imgContainer}>
        <Link href="/categories">
          <a>
            <Image
              src={galleryIcon}
              alt="Icone gallery"
              width={76}
              height={72}
            ></Image>
          </a>
        </Link>
      </div>
      <div className={Style.imgContainer}>
        <Link href="/contact">
          <a>
            <Image
              src={mailIcon}
              alt="Icone mail"
              width={76}
              height={76}
            ></Image>
          </a>
        </Link>
      </div>
      <div className={Style.imgContainer}>
        <Image src={menuIcon} alt="Icone menu" width={72} height={72}></Image>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
