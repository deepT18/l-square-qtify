import React from "react";
import styles from "./Button.module.css";

export default function Button({props}){
    return( <>
    <button className={styles.button} type="button" value={props}>{props}</button>
    </>)
}