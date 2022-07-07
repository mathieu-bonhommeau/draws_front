import React from "react";
import Style from "../styles/Header.module.scss";
import logo from "../assets/logo.png";
import Image from "next/image";

const Header = (props) => {
  return (
    <header className={Style.header}>
      <div className={Style.logoContainer}>
        <Image src={logo} alt="Logo Lilou draws" width={30} height={30} />
        <div>
          <span className={Style.logoMainText}>LILOU</span>
          <span className={Style.logoSubmainText}>Draws</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
