import React from "react";
import Button from "../Button/Button";
import classes from "./NavBottom.module.css";

const navBottom = (props) => {
    return (
        <div className={classes.NavBottom}>
                <Button clicked={props.previousHandler}>Previous</Button>
                <Button clicked={props.nextHandler}>Next</Button>
        </div>
    );
}

export default navBottom;