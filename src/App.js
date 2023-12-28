import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
// import Card from "./components/Card/Card.jsx";
import NewAlbumSection from "./components/Section/topAlbumSection.jsx";

function App() {
  return(
    <>
     <Navbar />
     <Hero />
     <NewAlbumSection />
    </>
  )
}

export default App;
