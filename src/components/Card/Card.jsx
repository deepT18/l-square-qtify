import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { likes, image, title ,follows,slug} = data;
        return (
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
                ;<p>{likes} Likes</p>
              </div>
            </div>
            <p className={styles.titlewrapper}>{title}</p>
          </div>
        );
      }
      case "song": {
        const { likes, image, title } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} className={styles.img} alt="" />
              <div className={styles.banner}>
                <Chip
                  label={data.follows}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    margin: "5px 0px 0px 5px",
                    height: "23px",
                    width: "73px",
                  }}
                />
                ;<p>{likes} Likes</p>
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

//  const {likes,image,title}=data;
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.card}>
//         <img src={image} className={styles.img} alt="" />
//         <div className={styles.banner}>
//           <Chip label={data.follows} sx={{ backgroundColor: "black", color: "white",margin:"5px 0px 0px 5px",height:"23px",width:"73px" }}/>;
//           <p>{likes} Likes</p>
//         </div>
//       </div>
//       <p className={styles.titlewrapper}>{title}</p>
//     </div>
//   );
// };

export default Card;
