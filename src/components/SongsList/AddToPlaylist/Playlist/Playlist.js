import { useEffect, useState } from "react";

const Playlist = (props) => {
  const [added, setAdded] = useState(false);
  const [playlists, setPlaylists] = useState(
    JSON.parse(localStorage.getItem("playlists"))
  );
  useEffect(() => {
    if (props.selectedSong) {
      setAdded(false);
      const checkSelectedSong = props.item.songs?.find(
        (song) => song.id === props.selectedSong.id
      );
      if (checkSelectedSong) {
        setAdded(true);
      }
    }
  }, [props]);

  const addtoPlaylistHandler = () => {
    let currentPlaylist = props.item;
    currentPlaylist.songs.push(props.selectedSong);
    let oldPlaylists = playlists.slice();
    oldPlaylists[props.index].songs = [
      ...oldPlaylists[props.index].songs,
      props.selectedSong,
    ];
    localStorage.setItem("playlists", JSON.stringify(oldPlaylists));
    setPlaylists(JSON.parse(localStorage.getItem("playlists")));
    setAdded(true);
  };

  return (
    <div className="playlist">
      <div className="info">
        <div className="image">
          <img
            src={"https://artwork.anghcdn.co//webp/?id=24226725&size=296"}
            alt={props.item.name}
          />
        </div>
        <div className="nameAndnumber">
          <p>{props.item.name}</p>
          <p>{props.item.songs.length} song</p>
        </div>
      </div>
      {added ? (
        <button className="added">Added</button>
      ) : (
        <button onClick={addtoPlaylistHandler}>+Add</button>
      )}
    </div>
  );
};
export default Playlist;
