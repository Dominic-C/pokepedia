import React, { Component } from "react";
import CardGrid from "../CardGrid/CardGrid";
import NavBottom from "../../components/UI/NavBottom/NavBottom";
import classes from "./LandingLayout.module.css";

class LandingLayout extends Component {
    state = {
        // prev and next URLs
        batchURL : "https://pokeapi.co/api/v2/pokemon/",
        prevURL: null,
        nextURL: null
    }

    componentDidMount() {
        console.log(this.props);
    }

    onBatchLoaded = (prevURL, nextURL) => {
        this.setState({
            prevURL: prevURL,
            nextURL: nextURL
        });
    }

    updateCurrentBatchURL(url) {
        console.log("updateCurrentBatchURL clicked, value: ", url);
        this.setState({batchURL: url});
    }

    render() {
        return <div className={classes.LandingLayout}>
            <CardGrid batchURL={this.state.batchURL} onBatchLoadedHandler={this.onBatchLoaded}/>

            <NavBottom 
                previousHandler={this.updateCurrentBatchURL.bind(this, this.state.prevURL)}
                nextHandler={this.updateCurrentBatchURL.bind(this, this.state.nextURL)}/>
            {/* <Button type="Previous" clicked={this.updateCurrentBatchURL.bind(this, this.state.prevURL)}>Previous</Button>
            <Button type="Next" clicked={this.updateCurrentBatchURL.bind(this, this.state.nextURL)}>Next</Button> */}
            </div>
    }
}

export default LandingLayout;