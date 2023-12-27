import React from "react";
import styles from "./Search.module.css";
import "../../index.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"

export default function Search({props}){
    return(
        <>
        <form action="submit" className={styles.main}>
            <input type="text" placeholder={props} className={styles.searchBar}/>
            <button className={styles.searchBtn}>
                <SearchIcon/>
            </button>
        </form>
        </>
    )
}