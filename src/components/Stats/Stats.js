import React, { Component } from "react";
import Stat from "./Stat/Stat";
import classes from "./Stats.module.css";

class Stats extends Component {
    state = {
        maxStat : 0
    }

    componentDidMount() {
        const maxStatList = this.props.stats.map(stat => {
            return parseInt(stat.base_stat);
        });

        this.setState({maxStat: Math.max(...maxStatList)});
    }
    
    render() {
        const allStats = this.props.stats.map(stat => {
            return <Stat 
            key={stat.stat.name} 
            label={stat.stat.name} 
            value={stat.base_stat}
            widthPercentage={(+stat.base_stat/parseFloat(this.state.maxStat))*100} />
        })
        return (
            <div className={classes.Stats}>
                <h2>Stats</h2>
                {allStats}
    
            </div>
        );
    }
}

export default Stats;