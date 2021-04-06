import React, { Component } from "react";
import CardGrid from "../CardGrid/CardGrid";
import NavBottom from "../../components/UI/NavBottom/NavBottom";
import classes from "./LandingLayout.module.css";

class LandingLayout extends Component {
    state = {
        // prev and next URLs
        batchURL: null,
        prevPage: null,
        nextPage: null
    }

    componentDidMount() {
        this.updateURLsAndPageNumbers();
    }
    
    componentDidUpdate(nextProps) {
        if (this.props.match.params.pageId !== nextProps.match.params.pageId) {
            this.updateURLsAndPageNumbers();
        }
    }

    updateURLsAndPageNumbers = () => {
        const pageNum = this.props.match.params.pageId;
        console.log("page num:", pageNum);
        if (pageNum > 1) {
            this.setState({batchURL : `https://pokeapi.co/api/v2/pokemon/?offset=${pageNum * 20 - 20}&limit=20`});
            this.setState({
                prevPage: +pageNum-1,
            })
        } else {
            this.setState({batchURL : `https://pokeapi.co/api/v2/pokemon/`})
        }
        this.setState({
            nextPage: +pageNum+1
        })
    }

    render() {
        return <div className={classes.LandingLayout}>
            <CardGrid batchURL={this.state.batchURL} updatePreviousAndNextHandler={this.updatePreviousAndNextHandler} {...this.props}/>

            <NavBottom 
                nextPageNum={this.state.nextPage}
                prevPageNum={this.state.prevPage}
                {...this.props}
                />
            </div>
    }
}

export default LandingLayout;