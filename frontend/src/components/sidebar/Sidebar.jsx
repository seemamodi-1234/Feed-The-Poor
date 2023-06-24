import './sidebar.css'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,} from "@material-ui/icons"
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const navigate = useNavigate();
  const SignOut = () => {
    localStorage.clear();
    window.location.href = '/register';
  };
  // const SignOut =(e)=>{
  //   e.preventDefault()
  //   try{
  //     console.log('Sign out clicked');
  //     localStorage.clear();
  //     console.log('Sign out clicked');
  //     navigate('/register');
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }
  
  return (
    <div className='sidebar'> 
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
            <li className="sidebarListItem" onClick={SignOut}>
              <LogoutIcon className='sidebarIcon' />
              <span className="sidebarListItemText">LogOut</span>
            </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr'/>
          
        </div>
    </div>
  )
}
