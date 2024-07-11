import React from "react";
import Card from "../molecules/Card";
import { cards } from "../../data";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Cards = () => {
  return (
    <CardsContainer>
      {cards.map((card) => (
        <Card
          title={card.title}
          text={card.description}
          img={card.image}
          link={card.link}
        />
      ))}
    </CardsContainer>
  );
};

export default Cards;
