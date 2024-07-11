import React from "react";
import VehicleCard from "../molecules/VehicleCard";
import { vehicleCards } from "../../data";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { Title } from "../atoms/Font";

const VehicleCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 2%;
`;

const Section = styled.div`
  padding: 5%;
`;

const VehicleCards = () => {
  return (
    <Section id="voitures">
      <Title id="vehicles">
        <h2>Nos voitures</h2>
      </Title>
      <VehicleCardsContainer>
        <Grid container spacing={3}>
          {vehicleCards.map((vehicleCard) => (
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <VehicleCard
                title={vehicleCard.title}
                description={vehicleCard.description}
                img={vehicleCard.img}
                price={vehicleCard.price}
                url={vehicleCard.url}
              />
            </Grid>
          ))}
        </Grid>
      </VehicleCardsContainer>
    </Section>
  );
};

export default VehicleCards;
