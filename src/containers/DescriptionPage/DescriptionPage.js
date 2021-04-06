import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import EvolutionChain from "../../components/EvolutionChain/EvolutionChain";
import axios from "axios";

class DescriptionPage extends Component {
    state = {
        pokemonData: ""
    }

    componentDidMount() {
        console.log(this.props);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`).then(response => {
            this.setState({ pokemonData: response.data });
            console.log(response.data);
        })
    }
    render() {
        return (<div>
            { this.state.pokemonData !== "" ?
                <div>
                    <Banner name={this.state.pokemonData.name} image={this.state.pokemonData.sprites['other']['official-artwork']['front_default']} types={this.state.pokemonData.types}/>
                    <Stats stats={this.state.pokemonData.stats} />
                    {/* <EvolutionChain speciesURL={this.state.pokemonData.species.url}/> */}
                </div>
                : null
            }
        </div>)
    }
}

export default DescriptionPage;