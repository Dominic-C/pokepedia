import React from "react";
import Stat from "./Stat/Stat";

const stats = (props) => {
    const allStats = props.stats.map(stat => {
        return <Stat key={stat.stat.name} label={stat.stat.name} value={stat.base_stat}/>
    })
    return (
        <div>
            {allStats}
        </div>
    );
}

export default stats;