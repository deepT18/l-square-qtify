import React, { useState,useEffect } from "react";
import Card from "../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel.jsx";
import Filters from "../Filter/Filter.js"

const AlbumSection = ({ datas, title, type,filterSource }) => {
  const [filters,setFilters]=useState([{key:'all',label:'All'}])
  const [selectedFilterIndex,setSelectedFilterIndex]=useState(0)
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    if(filterSource){
      filterSource().then((response)=>{
        const {data}=response;
        setFilters([...filters,...data])
      })
    }
  },[])

  const showFilters=filters.length>1;
  const cardsToRender=datas.filter((card)=>showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card)
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div>
      <div className={styles.headingShow}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
          {toggle ? "Collapse" : "show all"}
        </h4>
      </div>
      {showFilters && (<div className={styles.filterWrapper}><Filters 
      filters={filters}
      selectedFilterIndex={selectedFilterIndex}
      setSelectedFilterIndex={setSelectedFilterIndex}
      /></div>)}
      <div className="albumSection">
        {datas === null || datas === undefined ? (
          <CircularProgress />
        ) : toggle ? (
          <div className={styles.wrapper}>
            <Grid container className={styles.gridContainer} spacing={2}>
              {cardsToRender.map((data) => (
                <Grid item key={data.id} lg={2}>
                  <Card data={data} key={data.id} type="album" />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <Carousel
            datas={cardsToRender}
            renderComponent={(ele) => <Card data={ele} type={type} />}
          />
        )}
      </div>
    </div>
  );
};

export default AlbumSection;
