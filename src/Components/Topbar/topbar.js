import "./topbar.css";
import docIcon from "../../assets/google-doc-icon.png";
import { logOut } from "../../API/Auth";
export default function Topbar({ photoURL}) {

  function handleClick(){
    logOut();
    window.location.reload();
  }

  return (
    <div className="top-bar">
      <div className="topbar-left">
        <img className="docs-icon" src={docIcon} alt="doc-icon" />
        <p className="top-title">Docs</p>
      </div>
      <div className="user-image-with-log-out">
        <img src={photoURL} alt="user pic" />
        <span onClick={handleClick} className="log-out">Logout</span>
      </div>
    </div>
  );
}
