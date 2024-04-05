import React from 'react';
import './profile.css'
import Topbar from '@/app/components/topbar/Topbar';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Feed from '@/app/components/feed/Feed';
import Rightbar from '@/app/components/rightbar/Rightbar';

function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="porfileTop">
            <div className="profileCover">
            <img src="./assets/post3.jpeg" alt="" className="profileImg"/>
            <img src="./assets/1.jpeg" alt="" className="userImg"/>
            </div>
            <div className="profilrInfo">
                <h4 className="profileInfoName">Doaa Elsayed</h4>
                <span className="profileInfoDesc">Front end developer!</span>

            </div>
        </div>
        <div className="profileBottom">
    <Feed/>
    <Rightbar profile/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Profile
