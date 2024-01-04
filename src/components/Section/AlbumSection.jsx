import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel.jsx";

const AlbumSection = ({ datas, title, type }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.headingShow}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
          {toggle ? "Collapse" : "Show all"}
        </h4>
      </div>

      <div className="albumSection">
        {datas === null || datas === undefined ? (
          <CircularProgress />
        ) : !toggle ? (
          <div className={styles.wrapper}>
            <Grid container className={styles.gridContainer} spacing={2}>
              {datas.map((data) => (
                <Grid item key={data.id} lg={2}>
                  <Card data={data} key={data.id} type="album" />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <Carousel
            datas={datas}
            renderComponent={(ele) => <Card data={ele} type={type} />}
          />
        )}
      </div>
    </div>
  );
};

export default AlbumSection;
