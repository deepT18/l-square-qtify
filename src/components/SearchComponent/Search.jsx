import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg"

export default function Search({placeholder}){
    const onsubmit=(e)=>{
        e.preventdefault();
    }
    return (
        <>
        <form classname={styles.form} onSubmit={onsubmit}>
            <input className={styles.searchBar} placeholder={placeholder} required type="text" />
            <button type="submit"  className={styles.searchBtn}>
            <SearchIcon/>
            </button>
        </form>
        </>
    )
}