import Head from "next/head";
import Style from "../styles/Home.module.scss";
import React from "react";
import Arrow from "../assets/images/arrow-right.png";
import Image from "next/image";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="container">
      <main>
        <div className={Style.titleContainer}>
          <h1 className={Style.title}>
            <span className={Style.titleMainText}>LILOU</span>
            <span className={Style.titleSubmainText}>Draws</span>
          </h1>
          <a href="#" className={Style.toAboutMeArrow + " arrow-link"}>
            <Image src={Arrow} height={20} width={20} alt="A propos de moi" />
          </a>
        </div>
        <div className={Style.mySelectionContainer}>
          <h2>Ma sélection</h2>
          <Slider />
        </div>
      </main>
    </div>
  );
}
