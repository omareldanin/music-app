import "./playList.scss";
import { useEffect, useState } from "react";
import AddPlaylist from "./AddPlayList/AddPlaylist";
import Playlist from "./Playlist/Playlist";
import DeletePlaylist from "./DeletePlaylist/DeletePlaylist";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [showAddPlaylist, setShowAddPlaylis] = useState(false);
  const [showDeleteMenu, setShowDeleteMenu] = useState(false);
  const [selectPlaylist, setSelectedPlaylist] = useState("");

  useEffect(() => {
    const playlistsData = localStorage.getItem("playlists");
    if (playlistsData) {
      setPlaylists(JSON.parse(playlistsData));
    }
  }, []);

  const toggleAddPlaylist = () => {
    setShowAddPlaylis((pre) => (pre = !pre));
  };

  const toggleDeleteMenu = () => {
    setShowDeleteMenu((pre) => (pre = !pre));
  };

  const setSelectedPlaylistName = (name) => {
    setSelectedPlaylist(name);
  };

  const updatePlaylists = () => {
    const newdata = JSON.parse(localStorage.getItem("playlists"));
    setPlaylists(newdata);
  };

  return (
    <div className="playlists">
      <div className="header">
        <h2>All Playlists</h2>
        <button onClick={toggleAddPlaylist}>Create Playlist</button>
      </div>
      <div className="playlists-container">
        {playlists.map((item, index) => (
          <Playlist
            playlist={item}
            key={index}
            toggleDeleteMenu={toggleDeleteMenu}
            setSelectedPlaylistName={setSelectedPlaylistName}
          />
        ))}
      </div>
      {playlists.length === 0 ? (
        <div className="ifNoPlaylists">
          <h3>Be your very own DJ!</h3>
          <p>Create playlists and play your own custom music feed!</p>
        </div>
      ) : null}
      <AddPlaylist
        show={showAddPlaylist}
        close={toggleAddPlaylist}
        updatePlaylists={updatePlaylists}
      />
      <DeletePlaylist
        show={showDeleteMenu}
        close={toggleDeleteMenu}
        selectPlaylist={selectPlaylist}
        updatePlaylists={updatePlaylists}
      />
    </div>
  );
};

export default Playlists;
