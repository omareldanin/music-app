import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./playlistDetails.scss";

const PlaylistDetails = () => {
  const [playlists, setPlaylists] = useState(
    JSON.parse(localStorage.getItem("playlists"))
  );
  const [playlist, setPlaylist] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (playlists) {
      setPlaylist(playlists.find((item) => item.name === params.name));
    }
  }, [params, playlists]);

  const removeFromPlaylist = (song) => {
    let updatedPlaylist = playlist;
    updatedPlaylist.songs = updatedPlaylist.songs.filter(
      (item) => item.id === song.id
    );
    const index = playlists.findIndex((item) => item.name === params.name);
    let updatedPlayLists = playlists.slice();
    updatedPlayLists[index] = updatedPlaylist;
    setPlaylists(updatedPlayLists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlayLists));
  };

  return (
    <div className="playlist-details">
      <div className="header">
        <div className="image">
          <img
            src={"https://artwork.anghcdn.co//webp/?id=24226725&size=296"}
            alt={playlist?.name}
          />
        </div>
        <div className="playlist-info">
          <h1>{playlist?.name}</h1>
          <p>{playlist?.songs.length} song</p>
        </div>
      </div>
      <div className="songs">
        {playlist?.songs.map((item) => (
          <div className="song" key={item.id}>
            <div className="song-header">
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <h6>{item.title}</h6>
            </div>
            <div className="artist">
              <h6>{item.artist}</h6>
            </div>
            <div
              className="delete"
              onClick={() => {
                removeFromPlaylist(item);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PlaylistDetails;
