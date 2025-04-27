import {Link, useLocation} from "react-router-dom";
import './Header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <nav className="header__nav">
        <Link
          to="/points"
          className={`header__nav__link ${
            location.pathname === "/points" ? "header__nav__link--active" : ""
          }`}
        >
          Точки
        </Link>
        <Link
          to="/routes"
          className={`header__nav__link ${
            location.pathname === "/routes" ? "header__nav__link--active" : ""
          }`}
        >
          Маршруты
        </Link>
        <Link
          to="/map"
          className={`header__nav__link ${
            location.pathname === "/map" ? "header__nav__link--active" : ""
          }`}
        >
          Карта
        </Link>
        <Link
          to="/"
          className={`header__nav__link ${
            location.pathname === "/" ? "header__nav__link--active" : ""
          }`}
        >
          О проекте
        </Link>
        <Link
          to="/team"
          className={`header__nav__link ${
            location.pathname === "/team" ? "header__nav__link--active" : ""
          }`}
        >
          Команда
        </Link>
      </nav>
    </div>
  )
}

export default Header;