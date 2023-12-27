import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/vibrating-headphone 1.svg";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.text}>
          100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
        </h1>
        <img className={styles.image} src={HeroImage} alt="headphone" />
      </div>
    </>
  );
}
