import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/vibrating-headphone 1.svg";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img
            className={styles.image}
            width={112}
            src={HeroImage}
            alt="headphones"
          />
        </div>
      </div>
    </>
  );
}
