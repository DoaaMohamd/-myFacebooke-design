import React from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className='share'>
     <div className="shareWrapper">
        <div className="sharetop">
            <img className='shareProfileImg' src="./assets/1.jpeg" alt="" />
            <input placeholder='Whats in your mind?' type="text" />
        </div>
        <hr className='shareHr'/>
        <div className="sharebottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='sareoptiontxt'>Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelImportantIcon htmlColor='blue' className='shareIcon'/>
                    <span className='sareoptiontxt'>Tag</span>
                </div>
                <div className="shareOption">
                    <RoomIcon htmlColor='green' className='shareIcon'/>
                    <span className='sareoptiontxt'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='gold' className='shareIcon'/>
                    <span className='sareoptiontxt'>Feelings</span>
                </div>
                
            </div>
            <button className='sharebtn'>Share</button>
        </div>
     </div>
    </div>
  )
}

export default Share
