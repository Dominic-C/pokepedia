import React from "react";
import classes from "./Stat.module.css";

const stat = (props) => {
    return (
        <div className={classes.Stat}>
            <p className={classes.Label}>{props.label}</p>
            <p className={classes.Value}>{props.value}</p>
        </div>
    );
}

export default stat;