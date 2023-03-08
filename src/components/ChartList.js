import './ChartList.css';
import SongDetails from "./SongDetails";

const ChartList = ({top20}) => {
    const SongsNodes = top20.map((song) => {
        let name = song["im:name"].label;
        let artist = song["im:artist"].label;
        let key = top20.indexOf(song);
        let image = song["im:image"][2].label;

        return (
            <SongDetails name={name} artist={artist} position={key + 1} image={image} key={key}/>
        )
    })

    return (
        <>
            <ul>
                {SongsNodes}
            </ul>
        </>
    )
}

export default ChartList;
