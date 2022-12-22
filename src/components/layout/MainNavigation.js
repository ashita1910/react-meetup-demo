import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
// import classNames from "classnames";
// import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCxt = useContext(FavoritesContext);

  return (
    <nav className={"navbar navbar-expand-lg navbar-dark bg-danger"}>
      <a className="navbar-brand ms-3" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler me-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active ms-3">
            <Link className="nav-link" to="/">
              All Meet Ups
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link className="nav-link" to="/new-meet-up">
              Add New Meet Up
            </Link>
          </li>
          <li className="nav-item ms-3">
            <Link className="nav-link" to="/favorites">
              Favorites
              <span className="badge badge-dark">
                {favoritesCxt.favoritesCount}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default MainNavigation;
