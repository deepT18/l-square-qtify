import React, { useState } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";

const AlbumSection = ({ data, title }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.albumHeader}>
      <div className={styles.headingShow}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
          {toggle ? "Collapse" : "Show All"}
        </h4>
      </div>
  
      {data && data.length === 0 ? (
        <CircularProgress />
      ) : (
        toggle ? (
          <div className={styles.wrapper}>
            <Grid container spacing={2}>
              {data.map((album) => (
                <Grid item key={album.id} xs={12} sm={6} md={6} lg={2}>
                  <Card album={album} key={album.id} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : null
      )}
    </div>
  );
              }; 
export default AlbumSection;
