import React from "react";
import { Card } from "@mantine/core";
import c from "../img/icons8-c++.svg";
import django from "../img/icons8-django.svg";
import googlecloud from "../img/icons8-google-cloud-platform.svg";
import javascript from "../img/icons8-javascript.svg";
import nodejs from "../img/icons8-nodejs.svg";
import postgresql from "../img/icons8-postgresql.svg";
import python from "../img/icons8-python.svg";
import react from "../img/icons8-react.svg";
import typescript from "../img/icons8-typescript.svg";

function About() {
  return (
    <div className="abtreal-container">
      <div className="abtreal-boldtitle">Passionately learning.</div>
      <div className="abtreal-desc">
        I'm a full stack developer living in New York City. Between my Software
        Design courses, busy Github, and my local coding club, I'm always in the
        pursuit of sharpening my software skills. After deploying 3 websites
        with more on the way, I'm ready to take the next step.
      </div>
      <span className="abtreal-techtitle">Technologies I Frequently Use</span>
      <div className="abtreal-techcontainer">
        <div className="abtreal-techrow">
          <a href="#">
            <img src={c} height="50" width="50" />
          </a>
          <a href="#">
            <img src={django} height="50" width="50" />
          </a>
          <a href="#">
            <img src={googlecloud} height="50" width="50" />
          </a>
          <a href="#">
            <img src={javascript} height="50" width="50" />
          </a>
        </div>
        <div className="abtreal-techrow">
          <a href="#">
            <img src={nodejs} height="50" width="50" />
          </a>
          <a href="#">
            <img src={postgresql} height="50" width="50" />
          </a>
          <a href="#">
            <img src={python} height="50" width="50" />
          </a>
          <a href="#">
            <img src={react} height="50" width="50" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
