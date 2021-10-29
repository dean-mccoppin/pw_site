import React from "react";
import photo from "../img/proff-photo.png";
import { Button } from "@mantine/core";

function About() {
  return (
    <div className="about-container">
      <div className="profile-image">
        <img src={photo} width={120} height={120}></img>
      </div>
      <div className="name-bold">Hussein Shirazi</div>
      <div className="job-role">Full Stack Software Engineer</div>
      <div className="description">
        I'm a Full Stack developer with experience using React, Django, Node.js,
        PostgresSQL, Redis, and more.
      </div>
      <div className="about-button1">
        <Button size="xl" radius="lg" color="dark">
          More about me →
        </Button>
      </div>
      <div className="contact-info"></div>
    </div>
  );
}

export default About;
