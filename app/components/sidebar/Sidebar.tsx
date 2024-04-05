import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import Closefriends from '../closefriends/Closefriends';
import { users } from '@/app/dummydata';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Feed</span>

          </li>
          <li className="sidebarlistItem">
            <ChatIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Chats</span>

          </li>
          <li className="sidebarlistItem">
            <PlayCircleFilledIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Videos</span>

          </li>
          <li className="sidebarlistItem">
            <GroupIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Groups</span>

          </li>
          <li className="sidebarlistItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Bookmark</span>

          </li>
          <li className="sidebarlistItem">
            <HelpOutlineIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Qusetions</span>

          </li>
           
          <li className="sidebarlistItem">
            <WorkIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Jobs</span>

          </li>
          <li className="sidebarlistItem">
            <EventNoteIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Events</span>

          </li>
          <li className="sidebarlistItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarItemText">Courses</span>

          </li>
        </ul>
        <button className='sidebatBtn'>Showmore</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendlist">
          {users.map(u=>(<Closefriends key={u.id} user={u}/>))}
        </ul>
    </div>
    </div>
  )
}

export default Sidebar
