import React from "react";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";
import twitter from "../img/twitter.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="footer-socials">
        <a
          href="https://github.com/dean-mccoppinhttps://github.com/dean-mccoppin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} height="22" width="22" />
        </a>
        <a
          href="https://www.linkedin.com/in/hussein-shirazi-a363a0168/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} height="22" width="22" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=husseinabbasshirazi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mail} height="22" width="22" />
        </a>
        <a href="#">
          <img src={twitter} height="22" width="22" />
        </a>
      </div>
      <div className="copyright">© Hussein Shirazi</div>
    </div>
  );
}

export default Footer;
