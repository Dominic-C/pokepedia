import React, { Component } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import classes from "./CardGrid.module.css"

class CardGrid extends Component {
    state = {
        pokemon: null,
        startPokemonIndex: 0,
        endPokemonIndex: 0
    }

    componentDidMount() {
        console.log("called");
        this.updateBatch();
    }

    componentDidUpdate(nextProps) {
        if(nextProps.batchURL !== this.props.batchURL) {
            console.log("updating");
            this.updateBatch();
        }
    }

    updateBatch = () => {
        console.log("batch url: ", this.props.batchURL);
        axios.get(this.props.batchURL).then(response => {
            const allRequests = response.data.results.map(result => axios.get(result.url));
            axios.all(allRequests).then(axios.spread((...responses) => {
                console.log(responses[0]);
                const pokemon = responses.map(res => ({
                    id: res.data.id,
                    name: res.data.name,
                    imageURL: res.data.sprites.other['official-artwork']['front_default'],
                    types: res.data.types.map(type => type.type.name)
                }));

                this.setState({pokemon: pokemon, startPokemonIndex: responses[0].data.id, endPokemonIndex: responses[responses.length -1].data.id});
                this.props.onBatchLoadedHandler(response.data.previous, response.data.next)
            }))
        }).catch(err => console.log(err));
    }

    render() {
        let cards = null;
        if (this.state.pokemon !== null) {
            cards = this.state.pokemon.map(pokemonItem => 
            <Card 
                key={pokemonItem.id}
                name={pokemonItem.name}
                image={pokemonItem.imageURL}
                types={pokemonItem.types}
                />);
        }

        return <div className={classes.CardGrid}>
            <h2>#{this.state.startPokemonIndex.toString().padStart(3,0)} to #{this.state.endPokemonIndex.toString().padStart(3,0)}</h2>
            {cards}
        </div>;
    }
}

export default CardGrid;