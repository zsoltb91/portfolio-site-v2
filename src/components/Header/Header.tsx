import "./Header.css";
import inlogo from "../../assets/linkedin.png";
import ghlogo from "../../assets/github.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const navRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLInputElement>(null);
  const xbtnRef = useRef<HTMLInputElement>(null);
  const barbtnRef = useRef<HTMLInputElement>(null);

  const showNavbar = () => {
    if (
      navRef.current !== null &&
      headerRef.current !== null &&
      xbtnRef.current !== null &&
      barbtnRef.current !== null
    ) {
      navRef.current.classList.toggle("navigation");
      headerRef.current.classList.toggle("headercont");
      headerRef.current.classList.toggle("headercont_exp");
      navRef.current.classList.toggle("navigation_changed");
    }
  };

  return (
    <div className="headercont" ref={headerRef}>
      <Link to="/">
        <h1>
          Portfolio<span className="dot">.</span>
        </h1>
      </Link>

      <nav className="navigation" ref={navRef}>
        <ul className="navlist">
          <li className="navlinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navlinks">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navlinks">
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="https://github.com/zsoltb91">
              <img className="imgs" src={ghlogo} alt="" />
            </Link>
          </li>
          <li className="lastimg">
            <Link to="https://www.linkedin.com/in/zsolt-berki-389bb6242/">
              <img className="imgs" src={inlogo} alt="" />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="iconbar">
        <div ref={xbtnRef} className="">
          <button className="nav-btn" id="xbtn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <div ref={barbtnRef} className="">
          <button className="nav-btn" id="menubtn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
