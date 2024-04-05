import React from 'react';
import './closefriends.css';
type prop={user:{
    id:number,
    picture:string,
    username:string,
}}
function Closefriends({user}:prop) {
  return (
    <li className="sidebarfriend">
    <img className='sidebarFriendImg' src={user.picture} alt="" />
    <span className="sidebarfriendname">{user.username}</span>
  </li>
  )
}

export default Closefriends
