import React, { useLayoutEffect } from "react";
import photo from "../img/proff-photo.png";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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
        <Button
          component={Link}
          to="/about"
          size="xl"
          radius="lg"
          color="dark"
          styles={{
            label: {
              fontSize: 18,
            },
          }}
        >
          More about me →
        </Button>
      </div>
      <div className="contact-info">Get in touch</div>
      <div className="contact-description">
        I'm currently looking for an internship! If you have any questions, feel
        free to reach out. My inbox is always open.
      </div>
      <div className="about-buttons2">
        <div style={{ width: 250 }}>
          <Button
            //fix the 4 lines below lol, messing up with stuff
            component="a"
            href="mailto:husseinabbasshirazi@gmail.com"
            size="xl"
            radius="lg"
            color="dark"
            id="home-btn1"
            fullWidth
            styles={{
              root: {
                paddingLeft: 10,
                paddingRight: 10,
              },
              label: {
                fontSize: 18,
              },
            }}
          >
            <span id="wave-emoji">👋</span> Say hello
          </Button>
        </div>
        <div style={{ width: 250 }}>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/husseinshirazi/meeting"
            size="xl"
            radius="lg"
            id="home-btn2"
            fullWidth
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
            Schedule a meeting
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
