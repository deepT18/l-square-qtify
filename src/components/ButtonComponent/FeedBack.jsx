import React from "react";
import styles from "./Button.module.css";
import "../../index.css"

export default function FeedBack({props}){
    return(
    <button className={styles.feedback}>{props}</button>
    )
}