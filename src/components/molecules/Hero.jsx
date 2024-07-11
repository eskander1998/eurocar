import React from "react";
import { SlideText } from "../atoms/Font";
import styled from "styled-components";
import Booker from "../organisms/Booker";

import Carousel from "react-bootstrap/Carousel";

const Section = styled.div`
  .carousel-caption {
    text-align: left;
    left: 5%;
    bottom: 10%;
  }
`;

const HeaderText = styled.p`
    color : rgba(var(--bs-emphasis-color-rgb), 0.65);
`;

const Hero = () => {
  return (
    <Section>
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./assets/Sidi-Bou-Said.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <SlideText>
              <HeaderText>
                Location de voiture<br></br> Tunis et Monastir
              </HeaderText>
            </SlideText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./assets/Sidi-Bou-Said.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <SlideText>
            <HeaderText>
                Profiter de vos vacances<br></br> en Tunisie 
  </HeaderText>
              </SlideText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./assets/Sidi-Bou-Said.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <SlideText>
            <HeaderText>

                Location de voiture<br></br> Aéroport de Monastir
                </HeaderText>
            </SlideText>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Booker />
    </Section>
  );
};

export default Hero;
