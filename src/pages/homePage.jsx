import React from "react";
import styles from "./homePage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import AlbumSection from "../components/Section/AlbumSection.jsx";
import { fetchFilters } from "../apis/api.js";

export default function Homepage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums,songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <AlbumSection datas={topAlbums} title="Top Albums" type="album" />
        <AlbumSection datas={newAlbums} title="New Albums" type="album" />
        <AlbumSection datas={songs} title="Songs" type="song" filterSource={fetchFilters} />
      </div>
    </>
  );
}
