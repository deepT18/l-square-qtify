import React from "react";
import styles from "./Search.module.css";
import "../../index.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"

export default function Search(){
    return(
        <>
        <form action="submit" className={styles.main}>
            <input type="text" placeholder="Search a song of your choice" className={styles.searchBar}/>
            <button type="submit" className={styles.searchBtn}>
                <SearchIcon/>
            </button>
        </form>
        </>
    )
}