import React from 'react';
import './rightbar.css';
import {users} from '../../dummydata';
import Online from '../online/Online';
type p={profile ?: boolean};
const Rightbar = ({profile}:p) => {
  const Homepage = ()=> {
    return(
      <><div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="gift" />
        <span className="birthdaytxt"><b>Nehal Khalid</b> and <b>3 Others friends </b>have birthday to day</span>
      </div><img className="rightbarAd" src="assets/ad.png" alt="Ad" /><h4 className="rightbartitle">Online Friends</h4><ul className="friendlistonline">

          {users.map(u => (<Online key={u.id} user={u} />))}
        </ul></>
    );
  }
  const Profilepage=()=>{
    return(<>
    <h4 className="rightbartitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="key">City:</span>
        <span className="value">Egypt</span>

      </div>
      <div className="rightbarInfoItem">
        <span className="key">From:</span>
        <span className="value">Qena</span>

      </div>
      <div className="rightbarInfoItem">
        <span className="key">Relationship:</span>
        <span className="value">Married</span>

      </div>
    <h4 className="rightbartitle">User Friends</h4>
    <div className="rightbarFollowings">
    <div className="rightbarFollowing">
      <img src="./assets/2.jpeg" alt="" className="rightbarFollowingImg"/>
      <span>Joe John</span>
    </div>
    <div className="rightbarFollowing">
      <img src="./assets/3.jpeg" alt="" className="rightbarFollowingImg"/>
      <span>jess reem</span>
    </div>
    <div className="rightbarFollowing">
      <img src="./assets/4.jpeg" alt="" className="rightbarFollowingImg"/>
      <span>saffek lan</span>
    </div>
    <div className="rightbarFollowing">
      <img src="./assets/5.jpeg" alt="" className="rightbarFollowingImg"/>
      <span>dina moo</span>
    </div>
    </div>


    </div>
    </>);
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
    {profile ? <Profilepage/> : <Homepage/>}
      </div>
    </div>
  )
}

export default Rightbar
