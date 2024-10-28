import "./styles/Navigation.css";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";

export default function Navigation() {
  const [navOpen, isNavOpen] = useState(false);
  const toggleNav = () => {
    isNavOpen(!navOpen);
  };
  return (
    <nav className="navigation cent">
      <div className="navigation__item row">
        <div>
          <span className="theCaptaan">THE CAPTAAN</span>
        </div>
        <div
          className={`navigation__links__container row ${
            navOpen ? "nav__hamu" : ""
          }`}
        >
          <div className="cancel">
            <HiPlus className="cross__icon" onClick={toggleNav} />
          </div>
          <Link className="navigation__link" to="/">
            Home
          </Link>
          <Link className="navigation__link" to="/">
            About us
          </Link>
          <Link className="navigation__link" to="/">
            Our Investments
          </Link>
          <Link className="navigation__link" to="/">
            Our Offerings
          </Link>
        </div>
        <IoIosMenu className="menu__icon" onClick={toggleNav} />
      </div>
    </nav>
  );
}
