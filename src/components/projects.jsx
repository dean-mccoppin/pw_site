import React, { useLayoutEffect } from "react";
import test from "../img/test.png";
import proj1 from "../img/proj1.png";
import proj2 from "../img/proj2.png";
import { Button } from "@mantine/core";

function Projects() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="projects-container">
      <div className="project-boldtitle">Projects</div>
      <div className="project-desc">
        <span>
          Here are some of my new concepts. Have any suggestions or issues?
          Throw 'em{" "}
          <a
            id="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dean-mccoppin"
          >
            here.
          </a>
        </span>
      </div>
      <div className="projects-projcont">
        <div className="proj">
          <img src={proj1} />
          <div className="proj-titles">
            <span>TwitAnon</span>
            <div>
              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitanon.com/"
                size="lg"
                radius="lg"
                styles={{
                  root: {
                    backgroundColor: "#f5f6fa !important",
                  },
                  label: {
                    fontSize: 18,
                    color: "#000000 !important",
                  },
                }}
                id="meeting-btn"
              >
                View Project
              </Button>
            </div>
          </div>
          <span className="proj-desc">
            Tweet anonymously without signing in or signing up. Utilizes Redis
            for live communication between all connected clients to the server.
          </span>

          <ul className="proj-labels">
            <li>React</li>
            <li>Django REST API</li>
            <li>Redis</li>
            <li>PostgreSQL</li>
            <li>Websockets</li>
            <li>Google Cloud Platform</li>
          </ul>
        </div>
        <div className="proj">
          <img src={proj2} />
          <div className="proj-titles">
            <span>RedditAlgo</span>
            <div>
              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://redditalgo.com/"
                size="lg"
                radius="lg"
                styles={{
                  root: {
                    backgroundColor: "#f5f6fa !important",
                  },
                  label: {
                    fontSize: 18,
                    color: "#000000 !important",
                  },
                }}
                id="meeting-btn"
              >
                View Project
              </Button>
            </div>
          </div>
          <span className="proj-desc">
            Determine the political bias of a Reddit thread by analyzing each
            commentators post history and ranking their partisanship.
          </span>

          <ul className="proj-labels">
            <li>React</li>
            <li>Django</li>
            <li>Celery</li>
            <li>Redis</li>
            <li>Reddit API</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
