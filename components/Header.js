import React from "react";
import Style from "../styles/Header.module.scss";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import Image from "next/image";

const Header = (props) => {
  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <div className={Style.imgContainer}>
          <Image src={logo} alt="Logo Lilou draws" width={60} height={60} />
        </div>
        <div className={Style.logoText}>
          <span className={Style.logoMainText}>LILOU</span>
          <span className={Style.logoSubmainText}>Draws</span>
        </div>
      </div>
      <div>
        <div className={Style.imgContainer}>
          <Image
            src={avatar}
            alt="Avatar user account"
            width={60}
            height={60}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
