import React from "react";
import '../CSS/style.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Search(){

    return (
        <>
    <div className="main-container">
      <div className="nav" style={{ display: 'flex', flexWrap: 'wrap' }}>

        <div className="sidebar">
          <div className="navigation">
            <ul style={{ backgroundColor: '#121212', padding: '10px', borderRadius: '10px' }}>
              <li><a href="http://localhost:3000/Home"><span className="fa fa-home"></span> Home</a></li>
              <li><a href="http://localhost:3000/Search"><span className="fa fa-search"></span> Search</a></li>
            </ul>
            <br />
            <ul style={{ backgroundColor: '#121212', padding: '10px', borderRadius: '10px' }}>
              <li><a href=""><span className="fa fas fa-book"></span> Playlists</a></li>
              <li><a href=""><span className="fa fas fa-plus-square"></span> Create Playlist</a></li>
              <li><a href=""><span className="fa fas fa-heart"></span> Liked Songs</a></li>
            </ul>
          </div>
          <div style={{ marginBlock: '40px', padding: '10px', fontSize: 'smaller', display: 'flex' }} className="policies">
            <ul style={{ marginRight: '15px' }}>
              <li><a className="policy" href="">Legal</a></li>
              <li><a className="policy" href="">Privacy Policy</a></li>
              <li><a className="policy" href="">Cookies</a></li>
            </ul>
            <ul>
              <li><a className="policy" href="">Accessibility</a></li>
              <li><a className="policy" href="">Privacy Center</a></li>
            </ul>
          </div>
          <br />
          <span style={{ color: 'white', marginRight: '10px' }} className="fa fa-globe "></span>
          <select style={{ color: 'white', backgroundColor: '#121212', borderRadius: '20px', padding: '8px', paddingRight: '20px' }} name="" id="">
            <option className="fa-globe" value="">English</option>
            <option value="">Espanol</option>
            <option value="">Hindi</option>
          </select>
        </div>
      </div>

      <div className="content-container" style={{ color: 'white', paddingTop: '100px', paddingLeft: '350px', paddingRight: '30px' }}>

        <div className="search" style={{ position: 'absolute', top: '20px', marginLeft: '10px' }}>
          <a href="" className="fa fa-thin fa-chevron-left"></a>
          <a href="" className="fa fa-thin fa-chevron-right"></a>
          <input type="text" placeholder="What do you want to listen to?" />
        </div>
        <div className="heading" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '35px' }}>
          <h2 style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>Browse All</h2>
          <span><a style={{ fontSize: 'smaller' }} href="">Show All</a></span>
        </div>
        <div className="content-S">
          <div className="scroll">
            <ul className="songs-grid">
              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover1.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Most Trending</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover2.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Moody</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover3.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Romantic</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover4.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Most Listened</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover5.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Hindi</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover6.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>English</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/cover7.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Electro</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/album1.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Classics</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/album4.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Chill Beats</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/album5.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Solos</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div>
                  <a href="">
                    <div className="bg-box">
                      <img src={require ("../images/Playlist Covers/album6.jpeg")}  alt="" />
                      <div className="title-box">
                        <h2>Drive</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <footer className="page-footer">
          <div className="support-links" style={{ width: '60%' }}>
            <ul>
              <h4>Company</h4>
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
              </ul>          </div>
          <div className="social-links" style={{ width: '20%' }}>
            <button className="fa-brands fa-instagram"></button>
            <button className="fa-brands fa-facebook"></button>
            <button className="fa-brands fa-twitter"></button>
          </div>
        </footer>
      </div>
    </div>
        </>
    )
}
