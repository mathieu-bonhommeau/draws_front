import Head from "next/head";
import Style from "../styles/Home.module.scss";
import React from "react";
import Arrow from "../assets/images/arrow-right.png";
import Image from "next/image";
import Slider from "../components/Slider";
import DrawHomeSlider from "../components/DrawHomeSlider";
import CommentHomeSlider from "../components/CommentHomeSlider";
import { fetchComments, fetchDraws } from "../mockDatas/mockApi";

export default function Home({ draws, comments }) {
  console.log(comments);
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
          <Slider
            datas={draws}
            sliderType="draws"
            itemComponent={<DrawHomeSlider />}
          />
        </div>
        <div className={Style.sliderContainer}>
          <h2>Dites moi...</h2>
          <Slider
            datas={comments}
            sliderType="comments"
            itemComponent={<CommentHomeSlider />}
          />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const draws = await fetchDraws();
  const fetchComments = await fetch("https://127.0.0.1:8000/comment");
  const comments = await fetchComments.json();
  comments.sort((a, b) => b.stars - a.stars)
  comments.sort((a, b) => a.createdAt - b.createdAt)

  // Filtrer comments pour en avoir que 5
  console.log(comments);

  return {
    props: {
      draws,
      comments: comments.slice(0,5),
    },
    revalidate: 5,
  };
}
