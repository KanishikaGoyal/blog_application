import { Link } from "react-router-dom";
import './topbar.css'

export default function TopBar() {
  const user=true;
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        
        <div className='topCentre'>
          <ul className='topList'>
          <li className='topListItem'>
            <Link className="link" to="/">HOME</Link> 
          </li>
          
          <li className='topListItem'>
              <Link className="link" to="/about">ABOUT
              </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>

          {user && <li className="topListItem">
          <Link className="link" to="/logout">LOGOUT</Link>
          </li>}

          </ul>
        </div>

        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://tse4.mm.bing.net/th?id=OIP.9wo2G2pXgSaYLYKpgoT1OgHaHa&pid=Api&P=0&h=180"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        </div>
      </div>
  );
}