import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import styles from "./Section.module.css";



const AlbumSection = ({albumDatas, title}) => {

  const [topAlbums, setTopAlbums] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        const data = response.data;
        setTopAlbums(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.albumHeader}>
      <div className={styles.headingShow}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
          {toggle ? "Collapse":"Show All"}
        </h4>
        </div>
      {toggle ? (
        <div className={styles.wrapper}>
          <Grid container spacing={2}>
            {topAlbums.map((album) => (
              <Grid item key={album.id} xs={12} sm={6} md={6} lg={2}>
                <Card album={album} key={album.id} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
    </div>
  );
};

export default AlbumSection;
