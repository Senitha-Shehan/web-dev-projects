import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`skill-bx ${
                    isVisible ? "animate__animated animate__pulse" : ""
                  }`}
                >
                  <h2>Skills</h2>
                  <p>
                    I value simple content structure, clean design patterns, and
                    thoughtful interactions.
                  </p>
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="skill-slider"
                  >
                    <div className="item">
                      <img src={meter1} alt="Web Development" />
                      <h5>Web Development</h5>
                    </div>
                    <div className="item">
                      <img src={meter2} alt="Mobile Development" />
                      <h5>Mobile Development</h5>
                    </div>
                    <div className="item">
                      <img src={meter3} alt="Full Stack Developer" />
                      <h5>Full Stack Developer</h5>
                    </div>
                    <div className="item">
                      <img src={meter1} alt="Web Development" />
                      <h5>Web Development</h5>
                    </div>
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}

export default Skills;
