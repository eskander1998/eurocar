import React from "react";
import { Title, Text } from "../atoms/Font";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  text-align: start;
  background-color: #eee;
  width: 100%;
  margin: 1px;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    margin: 0;
  }

  &:hover {
    background-color: #f2c40e;
  }

  h3 {
    margin-bottom: 10px;
  }

  .card-info {
    margin: 3%;
  }

  @media screen and (max-width: 992px) {
    flex-direction: row;
  }

  @media screen and (max-width: 490px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Card = ({ title, text, img }) => {
  return (
    <Container>
      <img src={img} alt="" />
      <div className="card-info">
        <Title>
          <h3>{title}</h3>
        </Title>
        <Text>{text}</Text>
      </div>
    </Container>
  );
};

export default Card;
