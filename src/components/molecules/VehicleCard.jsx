import React from "react";
import styled from "styled-components";

const VehicleCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  position: relative;
`;

const VehicleCardLinkImage = styled.a`
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 95%;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

const CardPrice = styled.p`
  font-family: "fjallaOne";
  color: black;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: translateY(-40px);
  padding-top: 11%;
  padding-left: 4px;

  span {
    font-size: 0.9rem;
  }
`;

const CardLink = styled.a`
  font-family: "fjallaOne";
  text-decoration: none;
  font-size: 1.2rem;
  color: #333;
  letter-spacing: 1px;
  transform: translateY(-20px);

  &:hover {
    text-decoration: underline;
  }
`;

const VehicleCard = ({ title, description, img, price, url }) => {
  return (
    <VehicleCardContainer>
      <VehicleCardLinkImage href={url}>
        <img src={img} alt={title} />
      </VehicleCardLinkImage>
      <CardPrice>
      <span>A Partir de</span> {price} DT 
      </CardPrice>
      <CardLink href={url}>{title}</CardLink>
    </VehicleCardContainer>
  );
};

export default VehicleCard;
