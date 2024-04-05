import React from 'react';
import './home.css'
import Topbar from '@/app/components/topbar/Topbar';
import Sidebar from '@/app/components/sidebar/Sidebar';
import  Feed  from '@/app/components/feed/Feed';
 
import Rightbar from '@/app/components/rightbar/Rightbar';

const Hom = () => {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}

export default Hom
