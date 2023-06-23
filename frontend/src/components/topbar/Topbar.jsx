import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@material-ui/icons"
import {Link} from "react-router-dom"

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Social</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="Search for posts" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src={`${PF}person/image1`} alt="" className="topbarImg" />
        </div>
    </div>
  )
}
