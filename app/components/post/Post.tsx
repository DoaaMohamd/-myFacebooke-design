'use client';
import React, { useState } from 'react';
import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {users} from "../../dummydata";
type param={post:{  id:number , 
    desc?:string , 
    photo:string,
    date :string,
    userid:number ,
    like :number ,
    comment: number}}
const Post = ({post}:param) => {
   const[like , setlike]=useState(post.like);
   const[isliked , setisliked]=useState(false);

   function handelClick()
   {
setlike(isliked ? like+1 : like-1);
setisliked(!isliked);
   }
  return (
    <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="posttopLeft">
                <img className='postPorfileImg' src={users.filter(u=>u.id===post.userid)[0].picture} alt="" />
                <span className="postUsername">{users.filter(u=>u.id===post.userid)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
<MoreVertIcon/>

            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImage" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
            <div className="postBottomLeft"></div>
            <img className='likeicon' src="./assets/like.png" alt="" onClick={handelClick} />
            <img className='likeicon' src="./assets/heart.png" alt="" onClick={handelClick} />
            <span className="likecounter">{like} of people like this</span>


            <div className="postBottomRight"> 
            <span className="postComment">{post.comment} Comments</span>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Post
