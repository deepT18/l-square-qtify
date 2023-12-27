import React from "react";
import FeedBack from "../ButtonComponent/FeedBack.jsx"
import Search from "../SearchComponent/Search";
import styles from './Navbar.module.css'
import Logo from "../../assets/Logo.svg"


export default function Navbar(){
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={Logo} alt="img" width={65}/></div>
                 <Search search={"search a song of your choice"}/>
                 <FeedBack props="Give Feedback"/>
            </nav>
        </>
    )
}