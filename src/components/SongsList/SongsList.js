import "./songsList.scss";
import { useEffect, useState } from "react";
import Song from "./Song/Song";
import { useDispatch } from "react-redux";
import { sliceActions } from "../../store/songsSlice";
import AddToPlaylist from "./AddToPlaylist/AddToPlaylist";

const SongsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [showAddToPlaylist, setShowAddToPlaylist] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-app-54403-default-rtdb.firebaseio.com/songs.json")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        let transFormedData = [];
        for (const key in data) {
          transFormedData.push({ ...data[key], id: key });
        }
        setSongs(transFormedData);
        setCurrentPageData(transFormedData);
        dispatch(sliceActions.setSong(transFormedData));
      });
  }, [dispatch]);

  const searchChangeHandler = (e) => {
    let data = songs.slice();
    data = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCurrentPageData(data);
  };

  const toggleAddMenu = () => {
    setShowAddToPlaylist((pre) => (pre = !pre));
  };
  const setSelectedSongName = (name) => {
    setSelectedSong(name);
  };

  return (
    <div className="songs-list">
      {isLoading ? (
        <div className="loading-spinner">
          <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
            <circle cx="50" cy="50" r="20" />
          </svg>
        </div>
      ) : null}
      <div className="header">
        <h1>Explore</h1>
        <div className="search-box">
          <input
            className="form-control"
            type={"search"}
            placeholder="search for song"
            onChange={searchChangeHandler}
          />
        </div>
      </div>
      <div className="list">
        {currentPageData.map((item) => (
          <Song
            song={item}
            songs={songs}
            key={item.id}
            toggleAddMenu={toggleAddMenu}
            setSelectedSongName={setSelectedSongName}
          />
        ))}
      </div>
      <AddToPlaylist
        show={showAddToPlaylist}
        close={toggleAddMenu}
        selectedSong={selectedSong}
      />
    </div>
  );
};

export default SongsList;
