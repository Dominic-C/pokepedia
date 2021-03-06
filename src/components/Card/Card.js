import React from "react";
import Types from "../Types/Types";
import classes from "./Card.module.css";

const card = (props) => {
    const types = props.types.map(type => { return type.type.name})

    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    let style = null;
    // logic for gradients
    if (types.length >= 2) {
        style = { background: `linear-gradient(${colours[types[0]]}, ${colours[types[1]]})` };
    } else {
        style = { background: `${colours[types[0]]}` }
    }

    // class array, then in className, do join
    return (
        <div style={style} className={classes.Card} onClick={props.clicked}>
            <img src={props.image} alt={`${props.name}`} />
            <div className={classes.CardInfo}>

                <h3 className={classes.PokemonName}>{props.name}</h3>
                <p className={classes.PokemonId}>#{props.id.toString().padStart(3, 0)}</p>
                <Types types={props.types}/>
            </div>
        </div>
    )
}

export default card;