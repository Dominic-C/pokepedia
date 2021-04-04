import { Component } from "react";
import Banner from "../../components/Banner/Banner";
import axios from "axios";

class DescriptionPage extends Component {
    state = {
        pokemonData: ""
    }

    componentDidMount() {
        console.log(this.props);
        // this.setState({pokemonURL: `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`})
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`).then(response => {
            this.setState({pokemonData: response.data});
            console.log(response.data);
        })
    }
    render () {

        return (<div>
            <p>hello from DescriptionPage</p>
            { this.state.pokemonData !== "" ?
            <Banner image={this.state.pokemonData.sprites['other']['official-artwork']['front_default']}/> : null}
        </div>)
    }
}

export default DescriptionPage;