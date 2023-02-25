import "./deletePlaylist.scss";
const DeletePlaylist = (props) => {
  const deletePlaylist = () => {
    let playLists = JSON.parse(localStorage.getItem("playlists"));
    playLists = playLists.filter((item) => item.name !== props.selectPlaylist);
    localStorage.setItem("playlists", JSON.stringify(playLists));
    props.updatePlaylists();
    props.close();
  };

  return (
    <div className={`deletePlaylist center ${props.show ? "show" : ""}`}>
      <div className="delete">
        <p>Are you sure you want to delete this playlist?</p>
        <div className="buttons">
          <button onClick={deletePlaylist}>Confirm</button>
          <button onClick={props.close}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default DeletePlaylist;
