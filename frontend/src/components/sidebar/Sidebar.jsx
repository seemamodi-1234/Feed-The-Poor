import './sidebar.css'
import {RssFeed ,Chat} from "@material-ui/icons"

export default function Sidebar() {
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
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon'/>
              <span className="sidebarListItemText">Chats</span>
            </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr'/>
          
        </div>
    </div>
  )
}
