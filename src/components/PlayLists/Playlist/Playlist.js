import "./playlist.scss";
import { useDispatch } from "react-redux";
import { sliceActions } from "../../../store/songsSlice";
import { NavLink } from "react-router-dom";
const Playlist = (props) => {
  const dispatch = useDispatch();

  const onPlayHandler = () => {
    dispatch(sliceActions.setCurrentPlaylist(props.playlist.songs));
    dispatch(sliceActions.setCurrentSong(props.playlist.songs[0]));
  };

  return (
    <div className="playlist">
      <div className="header">
        <img
          src={"https://artwork.anghcdn.co//webp/?id=24226725&size=296"}
          alt={props.playlist.name}
        />
        <div className="controls center">
          <div
            className="center"
            onClick={() => {
              props.toggleDeleteMenu();
              props.setSelectedPlaylistName(props.playlist?.name);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </div>
          <div className="center" onClick={onPlayHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="song-information">
        <NavLink to={`/playlists/${props.playlist?.name}`}>
          {props.playlist?.name}
        </NavLink>
        <p>{props.playlist?.songs.length} song</p>
      </div>
    </div>
  );
};
export default Playlist;
