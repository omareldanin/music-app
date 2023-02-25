import "./song.scss";
import { useDispatch } from "react-redux";
import { sliceActions } from "../../../store/songsSlice";

const Song = (props) => {
  const dispatch = useDispatch();
  const onPlayHandler = () => {
    dispatch(sliceActions.setCurrentSong(props.song));
    dispatch(sliceActions.setCurrentPlaylist(props.songs));
  };

  return (
    <div className="song">
      <div className="header">
        <img src={props.song.image} alt={props.song.title} />
        <div className="controls center">
          <div className="center" onClick={onPlayHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </div>
          <div
            className="center"
            onClick={() => {
              props.toggleAddMenu();
              props.setSelectedSongName(props.song);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="song-information">
        <h6>{props.song.title}</h6>
        <p>{props.song.artist}</p>
      </div>
    </div>
  );
};
export default Song;
