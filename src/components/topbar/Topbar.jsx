import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              HEATH
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WORKOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              SHOP
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              BLOG
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/373335203_1733996700454036_4857940412909535648_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=-J0_qsHkdhUAX80YAUq&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCGF7DvOodB6vsfhhYmaUSd2PaTeuyu_lnHpYMPUSjWVQ&oe=6580A43A"
            alt=""
          />
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
