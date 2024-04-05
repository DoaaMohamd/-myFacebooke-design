import React from 'react';
import './register.css';

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
                <input placeholder="User Name" className="loginInput" />

                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />

                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterbutton">Log in to your Account</button>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
