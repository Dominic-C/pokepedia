import React from "react";
import classes from "./Types.module.css";

// receives a list of type objects from api, returns styled list components 
const types = (props) => {
    return (
        <div className={classes.Types}>
            {props.types.map((type, index) => {
                return <p key={index} className={classes.Type}>{type.type.name}</p>
            })}
        </div>
    );
}

export default types;