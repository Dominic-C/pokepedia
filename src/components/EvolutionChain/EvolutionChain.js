import React, { Component } from "react";
import axios from "axios";

class EvolutionChain extends Component {
    state = {
        evolutionChain: []
    }

    componentDidMount() {
        axios.get(this.props.speciesURL).then(response => {
            axios.get(response.data.evolution_chain.url).then(res => {
                let evolvesTo = res.data.chain.evolves_to;
                console.log(evolvesTo)
                while (evolvesTo !== []) {
                    this.setState(prevState => ({
                        evolutionChain: [...prevState.evolutionChain, evolvesTo.species.name] 
                    }))
                    evolvesTo = evolvesTo.chain.evolves_to;
                }
            })
        })
    }
    render() {
        return <div>
            <p>{this.state.evolutionChain}</p>
        </div>
    }
}

export default EvolutionChain;