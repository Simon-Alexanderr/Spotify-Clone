import React from "react";
import '../CSS/style.css';
import Validate from "../Validate"

export default function Signup(){

    return (
<>
  <div className="main-container login">
    <img src="./images/Spotify_Logo_RGB_White.png" style={{ marginLeft: "25px" }} alt="" className="logo-img" />
    <div className="content-container-B">
      <h1 className="heading-B">Sign up to start listening</h1>
      <form action="" className="login">
        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder="name@domain.com" />
        <a href="">Use Phone number instead</a>
        <button className="next">Next</button>
        <h2><span style={{ fontSize: "small" }}>or</span></h2>
      
      <button className="instead"><span className="fa-brands fa-google"></span> Sign up with Google</button>
      <button className="instead"><span className="fa-brands fa-facebook"></span> Sign up with Facebook</button>
      
      <br />
      <br />
      <hr color="#2a2a2a" />
      <br />
      <br />
      <h3>Already have an account?<span><a href=""> Log in Here</a></span></h3>
      </form>
    </div>
    
  </div>
  
  <footer>
    This site is not protected by any encodings and is meant to be a copy of the original website made for educational purposes
  </footer>
  </>
);
};