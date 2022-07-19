import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandTwitter, TbBrandInstagram } from "react-icons/tb";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src="./images/logo.svg" alt="aaaa" id="logo" />
        </div>
        <div className="footer-text-container">
          <div className="location">
            <img src="./images/icon-location.svg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="contact">
            <div className="telephone">
              <img src="./images/icon-phone.svg" alt="phone" />
              <p> +1-543-123-4567</p>
            </div>
            <div className="email">
              <img src="./images/icon-email.svg" alt="email" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="about-us">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </div>
          <div className="contact-us">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </div>
          <div className="social-icons">
            <RiFacebookCircleLine />
            <TbBrandTwitter />
            <TbBrandInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
