import './ChartContainer.css';
import React, {useState, useEffect} from "react";
import ChartList from "../components/ChartList";

const ChartContainer = () => {
    const [top20, setTop20] = useState(null);
    const getTop20 = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setTop20(data);
        })
    };

    useEffect(() => {
        getTop20();
    },[]);

    if(!top20) return null;

    return (
        <div className="top-20">
            <h1>UK Top 20 Singles</h1>
            <ChartList top20={top20.feed.entry}/>
        </div>
    )
};

export default ChartContainer;
