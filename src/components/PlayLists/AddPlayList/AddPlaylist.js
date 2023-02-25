import { useRef, useState } from "react";
import "./addPlaylist.scss";
const AddPlaylist = (props) => {
  const playlistInput = useRef();
  const [nameError, setNameError] = useState(false);
  const [nameIsUsed, setNameisUsed] = useState(false);
  const addPlaylistHandler = () => {
    const enteredName = playlistInput.current.value.trim();
    var playLists = JSON.parse(localStorage.getItem("playlists"));

    if (enteredName === "") {
      setNameError(true);
    } else {
      if (playLists) {
        const exsitingitem = playLists.find(
          (item) => item.name === enteredName
        );
        if (exsitingitem) {
          setNameisUsed(true);
        } else {
          localStorage.setItem(
            "playlists",
            JSON.stringify([...playLists, { name: enteredName, songs: [] }])
          );
          playlistInput.current.value = "";
          props.updatePlaylists();
          props.close();
        }
      } else {
        localStorage.setItem(
          "playlists",
          JSON.stringify([{ name: enteredName, songs: [] }])
        );
        playlistInput.current.value = "";
        props.updatePlaylists();
        props.close();
      }
    }
  };

  return (
    <div
      className={`addPlaylist-model center ${
        props.show ? "show-addPlaylist" : ""
      }`}
    >
      <div className="addPlaylist">
        <div className="header">
          <div>
            <h6>Create Playlist</h6>
          </div>
          <div className="buttons">
            <button className="create" onClick={addPlaylistHandler}>
              Create
            </button>
            <button className="cancel" onClick={props.close}>
              Cancel
            </button>
          </div>
        </div>
        <div className="form">
          <input
            className="form-control"
            type={"text"}
            placeholder="enter playlist name"
            ref={playlistInput}
            onChange={() => {
              setNameError(false);
              setNameisUsed(false);
            }}
          />
          {nameError ? <p>name is Required</p> : null}
          {nameIsUsed ? (
            <p>The playlist name you chose is already used</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default AddPlaylist;
