import "./addToPlaylist.scss";
import Playlist from "./Playlist/Playlist";
const AddToPlaylist = (props) => {
  const playlists = JSON.parse(localStorage.getItem("playlists"));

  return (
    <div className={`addToPlaylist center ${props.show ? "show" : ""}`}>
      <div className="playlists">
        <div className="header">
          <h6>Add To Playlist</h6>
          <div className="buttons">
            <button className="cancel" onClick={props.close}>
              Cancel
            </button>
          </div>
        </div>
        <div className="playlists">
          {playlists?.map((item, index) => (
            <Playlist
              item={item}
              key={item.name}
              index={index}
              selectedSong={props.selectedSong}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AddToPlaylist;
