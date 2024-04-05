import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
 

function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Doaa Social</h3>
                <span className="loginDesc">Connect your friends and world around you on Doaa Socail</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Doaa" className="loginInput"  />
                    <input placeholder="********" className="loginInput" />
                    <Link to="/Hom "> <button className="loginButton">Log In</button></Link>
                    <span className="loginForgot">Forgot password ?</span>
                  <Link to="/Register ">  <button className="loginRegisterbutton">Creat A New Account</button></Link>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
