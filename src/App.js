import "./App.scss";
import Layout from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import SongsList from "./components/SongsList/SongsList";
import Playlists from "./components/PlayLists/PlayLists";
import PlaylistDetails from "./components/PlaylistDetails/PlaylistDetails";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SongsList />} />
        <Route path="/playlists/*" element={<Playlists />} />
        <Route path="/playlists/:name" element={<PlaylistDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
