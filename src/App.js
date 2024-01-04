import React,{useState,useEffect} from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import Card from "./components/Card/Card.jsx";
// import Section from "./components/Section/Section.jsx";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums,fetchTopAlbums,fetchSongs } from "./apis/api.js";


function App() {
  
  const [data,setData]=useState({})

const generateData=(key,source)=>{
  source().then((data)=>{
    setData((prevData)=>{
      return {...prevData,[key]:data}
    })
  })
}

useEffect(()=>{
  generateData("topAlbums",fetchTopAlbums);
  generateData("newAlbums",fetchNewAlbums);
  generateData("songs",fetchSongs);

},[])

const {topAlbums=[],newAlbums=[],songs=[]}=data;
  return(
     <>
     <Navbar />
     <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
     </>
  )
}

export default App;
