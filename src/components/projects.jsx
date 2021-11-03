import React from "react";
import test from "../img/test.png";
import { Button } from "@mantine/core";

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-boldtitle">Projects</div>
      <div className="project-desc">
        <span>Here are some of my new concepts. Check out my Github here.</span>
      </div>
      <div className="projects-projcont">
        <div className="proj">
          <img src={test} />
          <div className="proj-titles">
            <span>TwitAnon</span>
            <div>
              <Button
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
