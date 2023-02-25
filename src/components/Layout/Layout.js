import "./layout.scss";
import Sidebar from "./Sidebar/SideBar";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
const Layout = (props) => {
  return (
    <>
      <Sidebar />
      <MusicPlayer />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
