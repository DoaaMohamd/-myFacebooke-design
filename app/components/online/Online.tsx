import React from 'react';
import './online.css'
type pa={user:{
    id:number,
    picture:string,
    username:string,
}}
function Online({user}:pa) {
  return (
    <li className="rightbarfriendli">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarprofileimg" src={user.picture} alt="" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername"> {user.username}</span>
          </li> 
           
        
          
  )
}

export default Online
