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
import aws from "../img/icons8-amazon-web-services.svg";

function About() {
  return (
    <div className="abtreal-container">
      <div className="abtreal-boldtitle">Always adapting.</div>
      <div className="abtreal-desc">
        <span>
          I'm a full stack developer living in New York City. Between my
          Software Design courses, busy Github, and my local coding club, I'm
          always in the pursuit of sharpening my software skills. After
          deploying 3 websites with more on the way, I'm ready to take the next
          step.{" "}
        </span>
        <span>
          For any of my undeployed concepts from our coding club, check out my{" "}
          <a href="https://github.com/dean-mccoppin">Github!</a>{" "}
        </span>
      </div>
      <span className="abtreal-techtitle">Technologies I Frequently Use</span>
      <div className="abtreal-techcontainer">
        <div className="abtreal-techrow">
          <a href="https://www.cplusplus.com/">
            <img src={c} height="50" width="50" />
          </a>
          <a href="https://www.django-rest-framework.org/">
            <img src={django} height="50" width="50" />
          </a>
          <a href="https://cloud.google.com/">
            <img src={googlecloud} height="50" width="50" />
          </a>
          <a href="https://www.javascript.com/">
            <img src={javascript} height="50" width="50" />
          </a>
          <a href="https://www.typescriptlang.org/">
            <img src={typescript} height="50" width="50" />
          </a>
        </div>
        <div className="abtreal-techrow">
          <a href="https://nodejs.org/en/">
            <img src={nodejs} height="50" width="50" />
          </a>
          <a href="https://www.postgresql.org/">
            <img src={postgresql} height="50" width="50" />
          </a>
          <a href="https://www.python.org/">
            <img src={python} height="50" width="50" />
          </a>
          <a href="https://reactjs.org/">
            <img src={react} height="50" width="50" />
          </a>
          <a href="https://aws.amazon.com/">
            <img src={aws} height="50" width="50" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
