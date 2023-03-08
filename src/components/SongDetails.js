import './SongDetails.css';

const SongDetails = ({name, artist, position, image}) => {
    return (
        <div className="song-details">
            <div className="position-image">
                <h1>{position}.</h1>
                <img src={image} alt=""/>
            </div>
            <div className="title-artist">
                <h2>{name}</h2>
                <h3>{artist}</h3>
            </div>
        </div>
    )
};

export default SongDetails;
