import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
    const activeClasses = [classes.Card];
    for (let type of props.types) {
        activeClasses.push(classes[type]);
    }
    // class array, then in className, do join
    return (
        <div className={activeClasses.join(" ")}>
            <img src={props.image} alt={`${props.name}`}/>
            <div className={classes.TypeDescription}>
            {props.types.map((type, index) => { return <p key={index} className={classes.TypeDescriptionItem}>{type}</p>
            })}
            </div>
            <h3 className={classes.PokemonName}>{props.name}</h3>
        </div>
    )
}

export default card;