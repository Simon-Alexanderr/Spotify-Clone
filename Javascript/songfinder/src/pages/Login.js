import React from 'react';
import '../CSS/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Validate from '../Validate'

const Login = () => {
    const client_id = "5b70613d134f4ec3b2f08886d0e1a0b8";
    const redirect_url = "heep://localhost:3000/Home";
    const auth_endpt = "https://accounts.spotify.com/authorize"
    const resp_type = "token";
  
  return (
    <>
      <img src="./images/Spotify_Logo_RGB_White.png" height="30px" alt="" className="logo-img" />

      <div className="main-container login">
        <div className="content-container-B">
          <h1 className="heading-B">Log in to Spotify</h1>
          <button className="instead">
            <span className="fa-brands fa-google"></span> Continue with Google
          </button>
          <button className="instead">
            <span className="fa-brands fa-facebook"></span> Continue with Facebook
          </button>
          <button className="instead">
            <span className="fa-brands fa-apple"></span> Continue with Apple
          </button>
          <button className="instead">
            <span className="fa fa-phone"></span> Continue with Mobile Number
          </button>
          <br />
          <br />
          <br />
          <hr />

          <form action="" className="login">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="name@domain.com" />
            <label htmlFor="pass">Password</label>
            <input type="password" placeholder="Password" name="pass" id="" />
            <a href="">Use Phone number instead</a>
            <br />
            <a href={`${auth_endpt}?client_id=${client_id}&redirect_url=${redirect_url}&response_type=${resp_type}`}><button className="next" >Next</button></a>
          

          <br />
          <br />
          <h3>
            Forgot Password?<span>&nbsp;<a href="">Log in Here</a></span>
          </h3>
          <h3>Sign up<span><a href='http://localhost:3000/Signup'>Here</a></span></h3>
          </form>
        </div>
      </div>

      <footer>
        This site is not protected by any encodings and is meant to be a copy of the original website made for
        educational purposes
      </footer>

      <script src="https://kit.fontawesome.com/fe5bb3969a.js" crossOrigin="anonymous"></script>
    </>
  );
};

export default Login;
