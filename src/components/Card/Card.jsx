import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({album}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageCard}>
        <img src={album.image} className={styles.img} alt="" />
        {/* <div className={styles.cardChip}>
        <Chip className={styles.cardChip} label="Chip Outlined" variant="outlined" />
        </div> */}
        <Chip label={album.follows} sx={{ backgroundColor: "black", color: "white",margin:"5px 0px 0px 5px",height:"23px",width:"73px" }}/>;
      </div>
      <p className={styles.albumName}>{album.title}</p>
    </div>
  );
};

export default Card;
