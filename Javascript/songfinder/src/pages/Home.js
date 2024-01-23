import React from 'react';
import '../CSS/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home(){


  return (
    <>
      <div className="main-container">
        <div className="nav">
          <div className="sidebar">
            <a href="">
              <img className="logo-img" src={require ("../images/Logo/Spotify_Logo_RGB_White.png")} alt=""/>
            </a>
            <div className="navigation">
              <ul>
                <li>
                  <a href="http://localhost:3000/Home">
                    <span className="fa fa-home"></span> Home
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/Search">
                    <span className="fa fa-search"></span> Search
                  </a>
                </li>
              </ul>
              <br />
              <ul>
                <li>
                  <a href="">
                    <span className="fa fas fa-book"></span> Playlists
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fas fa-plus-square"></span> Create Playlist
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="fa fas fa-heart"></span> Liked Songs
                  </a>
                </li>
              </ul>
            </div>
            <div className="policies">
              <ul>
                <li><a className="policy" href="">Legal</a></li>
                <li><a className="policy" href="">Privacy Policy</a></li>
                <li><a className="policy" href="">Cookies</a></li>
              </ul>
              <ul>
                <li><a className="policy" href="">Accessibility</a></li>
                <li><a className="policy" href="">Privacy Center</a></li>
              </ul>
            </div>
            <br/>
            <span className="fa fa-globe globe"></span>
            
            <select name="" id="">
              <option className="fa-globe" value="">English</option>
              <option value="">Espanol</option>
              <option value="">Hindi</option>
            </select>
          </div>
          <div className="nav-split-login">
            <button className="signup"><a href="http://localhost:3000/Signup">Sign Up</a></button>
            <button className="log"><a href='http://localhost:3000/Login'>Log in</a></button>
          </div>
        </div>
        <div className="content-container">
          <div className="heading">
            <h2>Spotify Playlists</h2>
            <span><a href="">Show All</a></span>
          </div>
          <div className="content">
            <ul>
              <li>
                <div>
                  <div className="img-box">
                    <img src={require ("../images/Playlist Covers/album1.jpeg")} alt="" />
                    <div className="transparent-box">
                      <div className="caption">
                        <button onClick={() => window.location.href = './Songpage.html'} className="fa fa-play play-button"></button>
                      </div>
                    </div>
                  </div>
                  <h4>Something chill?</h4>
                  <footer>Handpicked by your favorite, to soothe your nerves and get productive</footer>
                </div>
              </li>
              <li>
                <div>
                  <div className="img-box">
                    <img src={require("../images/Playlist Covers/album2.jpeg")} alt="" />
                    <div className="transparent-box">
                      <div className="caption">
                        <button className="fa fa-play play-button" aria-hidden="true"></button>
                      </div>
                    </div>
                  </div>
                  <h4>Or something moody?</h4>
                  <footer>Cheer Up! With these powerful beats</footer>
                </div>
              </li>
              <li>
                <div>
                  <div className="img-box">
                    <img src={require ('../images/Playlist Covers/album3.jpeg')} alt="" />
                    
                    <div className="transparent-box">
                      <div className="caption">
                        <button className="fa fa-play play-button"></button>
                      </div>
                    </div>
                  </div>
                  <h4>or maybe something thrilling?</h4>
                  <footer>Motivate Yourself with these intense raps</footer>
                </div>
              </li>
            </ul>
          </div>
          <footer className="page-footer">
            <div className="support-links">
              <ul><h4>Company</h4>
                <li><a href="">About</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">For the Record</a></li>
              </ul>
              <ul> <h4>Communities</h4>
                <li><a href="">For Artists</a></li>
                <li><a href="">Devs</a></li>
                <li><a href="">Advertising</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">Vendors</a></li>
              </ul>
              <ul> <h4>Useful Links</h4>
                <li><a href="">Support</a></li>
                <li><a href="">Free Mobile App</a></li>
              </ul>
            </div>
            <div className="social-links">
              <button className="fa-brands fa-instagram"></button>
              <button className="fa-brands fa-facebook"></button>
              <button className="fa-brands fa-twitter"></button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};