import "./styles/AsideNav.css";
import { MdOutlineMailLock } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

export default function Nav() {
  return (
    <div className="aside-fixed" id="asideMobile">
      <div className="col cent basic-profile-cont">
        <img className="profile-img" src="/images/sybo-games-sybo.gif" alt="" />
        <div className="col cent">
          <p className="logo-cont">
            <span className="theCaptaan">The Captaan</span>
          </p>

          <button id="fullstack" className="carrier-btn">
            Business Man
          </button>
          <div className="active-container row">
            <p className="green-dot"></p>
            <p>alive</p>
          </div>
        </div>
      </div>
      <div className="aside-card-container">
        <a className="aside-card row" href="mailto:thecaptaan@proton.me">
          <div className="aside-icon-cont">
            <MdOutlineMailLock />
          </div>
          <div className="col">
            <span className="aside-card-header">Email</span>
            <span>hello@xorblin.com</span>
          </div>
        </a>
        <a className="aside-card row" href="https://xorblin.com">
          <div className="aside-icon-cont">
            <VscGlobe />
          </div>
          <div className="col">
            <span className="aside-card-header">Domain</span>
            <span>https://xorblin.com</span>
          </div>
        </a>
        <a
          className="aside-card row"
          href="https://maps.app.goo.gl/1V21ToDGpbNAEdjn9"
        >
          <div className="aside-icon-cont">
            <LuMapPin />
          </div>
          <div className="col">
            <span className="aside-card-header">Address</span>
            <span>Bettiah, Bihar - Bharat</span>
          </div>
        </a>
        <a
          className="aside-card row"
          href="https://api.whatsapp.com/send?phone=6377192121&text=%22Hi%2C%20I%20am%20reaching%20out%20through%20your%20portfolio%20website.%20I%20am%20interested%20in%20establishing%20a%20partnership%20with%20your%20startup"
        >
          <div className="aside-icon-cont">
            <FaWhatsapp />
          </div>
          <div className="col">
            <span className="aside-card-header">Whatsapp</span>
            <span>+91 6377192121</span>
          </div>
        </a>
      </div>
      <div className="social-media-container row">
        <a className="social-media" href="https://linkedin.com/in/thecaptaan">
          <img src="/images/linkedin.svg" width="20" alt="" />
        </a>
        <a className="social-media" href="https://instagram.com/thecaptaan">
          <img src="/images/instagram.svg" width="20" alt="" />
        </a>
        <a className="social-media" href="https://twitter.com/CaptaanThe">
          <img src="/images/twitter.png" width="20" alt="" />
        </a>
        <a className="social-media" href="https://github.com/thecaptaan">
          <img src="/images/github.svg" width="20" alt="" />
        </a>
      </div>
      <div className="dropdown-div">
        <img id="mobile-dropDown" src="/images/arrow.svg" width="30" alt="" />
      </div>
    </div>
  );
}
