import {Link, useLocation} from "react-router-dom";
import './Header.scss';
import {CircleDot, Route, Map, Info, UserRoundCheck } from "lucide-react";
import {useEffect, useState} from "react";

const Header = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const navLinks = [
    { path: '/points', text: 'Точки', Icon: CircleDot },
    { path: '/routes', text: 'Маршруты', Icon: Route },
    { path: '/map', text: 'Карта', Icon: Map },
    { path: '/', text: 'О проекте', Icon: Info },
    { path: '/team', text: 'Команда', Icon: UserRoundCheck },
  ]

  return (
    <div className="header">
      <nav className="header__nav">
        { navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`header__nav__link ${
              location.pathname === link.path ? "header__nav__link--active" : ""
            }`}
          >
            { isMobile ? (
              <link.Icon size={24}/>
            ) : (
              <div>{link.text}</div>
            )}
          </Link>
        )) }
      </nav>
    </div>
  )
}

export default Header;