import React, { useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="abtreal-container">
        <div className="abtreal-boldtitle">Always adapting.</div>
        <div className="abtreal-desc">
          <span>
            I'm a full stack developer living in New York City. Between my
            Software Design courses, busy Github, and my local coding club, I'm
            always in the pursuit of sharpening my software skills. After
            deploying 3 websites with more on the way, I'm ready to take the
            next step.{" "}
          </span>
          <span>
            Check out more of my projects on my{" "}
            <a
              id="link"
              href="https://github.com/dean-mccoppin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github!
            </a>{" "}
          </span>
        </div>
        <span className="abtreal-techtitle">Technologies I Frequently Use</span>
        <div className="abtreal-techcontainer">
          <div className="abtreal-techrow">
            <a
              href="https://www.cplusplus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={c} height="50" width="50" />
            </a>
            <a
              href="https://www.django-rest-framework.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={django} height="50" width="50" />
            </a>
            <a
              href="https://cloud.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlecloud} height="50" width="50" />
            </a>
            <a
              href="https://www.javascript.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={javascript} height="50" width="50" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={typescript} height="50" width="50" />
            </a>
          </div>
          <div className="abtreal-techrow">
            <a
              href="https://nodejs.org/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nodejs} height="50" width="50" />
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={postgresql} height="50" width="50" />
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={python} height="50" width="50" />
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={react} height="50" width="50" />
            </a>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={aws} height="50" width="50" />
            </a>
          </div>
        </div>
        <span className="abtreal-techtitle">Club Projects</span>
      </div>
      <div className="abtreal-container2">
        <div className="clubproj-list">
          <a
            href="https://github.com/dean-mccoppin/Billboard100_toSpotify"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="clubproj-container">
              <div className="clubproj-startcont">
                <span>05</span>
              </div>
              <div className="clubproj-middlecont">
                <div className="clubproj-midtopcont">
                  <span className="clubproj-title">Spotify Top Charts</span>
                  <span className="clubproj-language">OAuth</span>
                </div>
                <div className="clubproj-bottomcont">
                  <span>
                    Automatically generates a playlist of the hot 100 tracks of
                    the week from Billboard.
                  </span>
                </div>
              </div>
              <div className="clubproj-endcont">
                <span>→</span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/dean-mccoppin/NYC-COVID-Data-visualizer"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="clubproj-container">
              <div className="clubproj-startcont">
                <span>04</span>
              </div>
              <div className="clubproj-middlecont">
                <div className="clubproj-midtopcont">
                  <span className="clubproj-title">COVID Data Visualizer</span>
                  <span className="clubproj-language">Pygal, Matplotlib</span>
                </div>
                <div className="clubproj-bottomcont">
                  <span>
                    Views COVID-19 stats with a beautiful display for any valid
                    zip code in New York City.
                  </span>
                </div>
              </div>
              <div className="clubproj-endcont">
                <span>→</span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/dean-mccoppin/Fitness-Inventory"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="clubproj-container">
              <div className="clubproj-startcont">
                <span>03</span>
              </div>
              <div className="clubproj-middlecont">
                <div className="clubproj-midtopcont">
                  <span className="clubproj-title">Inventory Checker</span>
                  <span className="clubproj-language">Flask, Selenium</span>
                </div>
                <div className="clubproj-bottomcont">
                  <span>
                    Actively checks the availability for fitness products from
                    several major retailing sites in real time.
                  </span>
                </div>
              </div>
              <div className="clubproj-endcont">
                <span>→</span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/dean-mccoppin/4chan-Scraper"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="clubproj-container">
              <div className="clubproj-startcont">
                <span>02</span>
              </div>
              <div className="clubproj-middlecont">
                <div className="clubproj-midtopcont">
                  <span className="clubproj-title">4chan Data Analyzer</span>
                  <span className="clubproj-language">BeautifulSoup</span>
                </div>
                <div className="clubproj-bottomcont">
                  <span>
                    Data aggregator that sifts through all 4chan posts and
                    returns threads that match a chosen value.
                  </span>
                </div>
              </div>
              <div className="clubproj-endcont">
                <span>→</span>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/dean-mccoppin/UserTags"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="clubproj-container">
              <div className="clubproj-startcont">
                <span>01</span>
              </div>
              <div className="clubproj-middlecont">
                <div className="clubproj-midtopcont">
                  <span className="clubproj-title">Social Media Finder</span>
                  <span className="clubproj-language">Django</span>
                </div>
                <div className="clubproj-bottomcont">
                  <span>
                    Full stack website built with Django that supports user
                    profiles and custom tags to find online friends.
                  </span>
                </div>
              </div>
              <div className="clubproj-endcont">
                <span>→</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
