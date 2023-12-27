import React from "react";
import "./index.css";
import Button from "./components/ButtonComponent/Button.jsx";
import Search from "./components/SearchComponent/Search.jsx"

function App() {
  return(
    <>
     <Button props={"Give Feedback"}/>
     <Search props="Enter"/>
    </>
  )
}

export default App;
