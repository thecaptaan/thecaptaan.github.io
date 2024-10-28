import "./styles/Footer.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer col cent">
      <div className="footer__item row">
        <div className="footer__item__content">
          <div>
            <p className="footer__label">Work With us</p>
            <a className="footer__link" href="mailto:hello@xorblin.com">
              hello@xorblin.com
            </a>
          </div>
        </div>
        <div className="footer__item__content">
          <div>
            <p className="footer__label">Follow us</p>
            <div className="footer__icons row">
              <a href="https://instagram.com/thecaptaan">
                <FaInstagram className="footer__icon" />
              </a>
              <a href="https://x.com/captaanthe">
                <FaXTwitter className="footer__icon" />
              </a>
              <a href="https://linkedin.com/in/thecaptaan">
                <FaLinkedinIn className="footer__icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__item__content">
          <div>
            <p className="footer__label">Developed By</p>
            <a className="footer__link" href="https://xorblin.com">
              xorblin.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
