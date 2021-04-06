import React from "react";
import Button from "../Button/Button";
import classes from "./NavBottom.module.css";

const navBottom = (props) => {

    return (
        
        <div className={classes.NavBottom}>
                <Button clicked={() => props.history.push(`/page/${props.prevPageNum}`)}>Previous</Button>
                <Button clicked={() => props.history.push(`/page/${props.nextPageNum}`)}>Next</Button>
        </div>
    );
}

export default navBottom;