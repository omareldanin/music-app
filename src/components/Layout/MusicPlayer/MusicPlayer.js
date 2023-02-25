import "./musicPlayer.scss";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { sliceActions } from "../../../store/songsSlice";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.song.currentSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();
  const audio = useRef();

  const onPlayinghamdler = () => {
    setIsPlaying(true);
  };
  const onPausehandler = () => {
    setIsPlaying(false);
  };
  const playHandler = () => {
    audio.current.play();
  };
  const pauseHandler = () => {
    audio.current.pause();
  };

  const nextHanlder = () => {
    dispatch(sliceActions.nextSonghandler());
  };
  const preHanlder = () => {
    dispatch(sliceActions.preSonghandler());
  };

  return (
    <div className={`music-player ${currentSong ? "" : "hide"}`}>
      <div className="song-info">
        <div className="image">
          <img src={currentSong?.image} alt={currentSong?.title} />
        </div>
        <div className="info">
          <h5>{currentSong?.title}</h5>
          <p>{currentSong?.artist}</p>
        </div>
      </div>
      <div className="audio">
        <div className="controls">
          <div className="buttons">
            <div className="center" onClick={preHanlder}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
              </svg>
            </div>
            {isPlaying ? (
              <div className="center pause" onClick={pauseHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
                </svg>
              </div>
            ) : (
              <div className="center play" onClick={playHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
              </div>
            )}
            <div className="center" onClick={nextHanlder}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
              </svg>
            </div>
          </div>
        </div>
        <audio
          src={currentSong?.source}
          ref={audio}
          controls
          autoPlay
          onPlaying={onPlayinghamdler}
          onPause={onPausehandler}
          onEnded={nextHanlder}
        ></audio>
      </div>
    </div>
  );
};
export default MusicPlayer;
