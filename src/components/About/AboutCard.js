import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Nikhitha </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            
            <br />
            I have completed Bachelors of Technology  in Computer Science and Technology at GNITS
            Hyd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight />Personal Styling & Aesthetics
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports & Fitness 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Nikhitha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
