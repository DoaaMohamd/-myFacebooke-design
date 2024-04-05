import React from 'react';
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcons from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar-Container'>
        <div className="topbar-Left"> <span className="logo">Doaa Social</span></div>
        <div className="topbar-Center">
            <div className="searchbar">
                <SearchIcon className='searchIcon' />
                <input placeholder='Search for friends , posts or videos' className="searchInput" />
            </div>
        </div>

        <div className="topbar-Right"> 
        <div className="topbarLinks">
            <span className="topbarlink">Home</span>
            <span className="topbarlink">Timeline</span>
 
            </div>
            <div className="topbaricons">
            <div className="topbaritem">
                <PersonIcon/>
                <span className="topbarIconBadge">1</span>
               </div>

               <div className="topbaritem">
                <ChatIcons/>
                <span className="topbarIconBadge">2</span>
               </div>

               <div className="topbaritem">
                <NotificationsIcon/>
                <span className="topbarIconBadge">3</span>
               </div>

               


            </div>
            <Link to="/Profile"><img src="/assets/1.jpeg" alt="photo" className="topbarImage" /></Link>
            </div>

       
    </div>
  )
}

export default Topbar
