import React from "react";
import classes from "./Stat.module.css";

const stat = (props) => {
    const colours = {
        hp: "#FF2D00",
        attack: "#FF8700",
        defense: "#FFC700",
        "special-attack" : "#0073FF",
        "special-defense" : "#00D23C",
        speed : "#E400BE"
    }

    return (
        <div className={classes.Stat}>
            <p className={classes.Label}>{props.label}</p>
            <div className={classes.Value}>
                <p className={classes.Spec} style={{width: `${props.widthPercentage}%`, backgroundColor : colours[props.label]}}>{props.value}</p>
            </div>
        </div>
    );
}

export default stat;