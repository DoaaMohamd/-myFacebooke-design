 
 'use client';
 
import { BrowserRouter, Route, Routes   } from "react-router-dom";
import styles from "./Page.module.css";
import Hom from "./pages/Hom/Hom";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Link from "next/link";
 

export default function Home() {
  if (typeof window !== 'undefined') {
  return (
      // <Router>
      //   <div className={styles.container}>
      //     <Switch>
      //       <Route  path="/">
      //         <Hom/>
      //       </Route>
      //       <Route path="/register">
      //         <Register/>
      //       </Route>
      //       <Route path="/login">
      //         <Login/>
      //       </Route>
      //       <Route path="/profile">
      //         <Profile/>
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
      
         <BrowserRouter> 
         
        
    <Routes>
    <Route path="/" element={<Login/>}/>
      <Route path="/Hom" element={<Hom />}/>
     
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Profile" element={<Profile/>}/>

 
    </Routes>
   
    </BrowserRouter> 
    
 
    
    
  );     }
}
