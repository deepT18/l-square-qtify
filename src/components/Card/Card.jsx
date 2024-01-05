import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";
import { Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { likes, image, title ,follows,slug,songs} = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} className={styles.img} alt="" />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} Follows`}
                  size="small"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                />
              </div>
            </div>
            <p className={styles.titlewrapper}>{title}</p>
          </div>
          </Tooltip>
        );
      }
      case "song": {
        const { likes, image, title} = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} className={styles.img} alt="" />
              <div className={styles.banner}>
                <Chip
                  label={`${likes}`}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                    height: "23px",
                    width: "73px",
                  }}
                />
              </div>
            </div>
            <p className={styles.titlewrapper}>{title}</p>
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };
  return getCard(type);
};


export default Card;
