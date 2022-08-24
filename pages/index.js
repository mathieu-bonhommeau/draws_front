import Head from "next/head";
import Style from "../styles/Home.module.scss";
import React from "react";
import Arrow from "../assets/images/arrow-right.png";
import Image from "next/image";
import Slider from "../components/Slider";
import { mockHomeDraws, mockHomeComments } from "../mockDatas/datas.js";
import DrawHomeSlider from "../components/DrawHomeSlider";
import CommentHomeSlider from "../components/CommentHomeSlider";

export default function Home() {
  //Get static props pour récupérer les données via l'api (mockHomeDraws, mockHomeComments)

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
        <div className={Style.sliderContainer}>
          <h2>Ma sélection</h2>
          <Slider datas={mockHomeDraws} sliderType="draws" itemComponent={<DrawHomeSlider />}/>
        </div>
        <div className={Style.sliderContainer}>
          <h2>Dites moi...</h2>
          <Slider datas={mockHomeComments} sliderType="comments" itemComponent={<CommentHomeSlider />}/>
        </div>
      </main>
    </div>
  );
}
