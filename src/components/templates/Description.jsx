import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import Text, { Bold, Title } from "../atoms/Font";
import Button from "../atoms/Button";

const DescriptionSection = styled.div`
  padding: 5%;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 10px;
    cursor: pointer;
  }
`;

const AdvertisingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;


const RedirectAdress = () => {
  window.open('https://maps.app.goo.gl/KFT7ZtfqWBHkwfNE7', '_blank');
};


const Description = () => {
  return (
    <DescriptionSection id="services">
      <Grid container>
        <Grid xl={6} lg={12}>
          <div>
            <Title>
              <h1>Bienvenue chez Euro Car</h1>
            </Title>
            <Bold>
             Location de voitures de toutes gammes pour courte ou longue durée en Tunisie
            </Bold>
            <Text>
            Chez Euro Car, nous proposons un vaste choix de voitures à louer <br/>
            pour une courte ou longue durée.  <br/>
            Nous proposons également la location à l'heure sur le Grand Tunis. <br/>
            Nos agences sont situées à Cité Ennasr et à Monastir. <br/>
            Pour toutes demandes de réservation, veuillez nous contacter <br/>
            par téléphone ou sur WhatsApp au +216 97 025 700. <br/>
            Nous sommes ouverts du lundi au dimanche de 8h00 à 00h00.
            <br/><br/>
            <span  onClick={RedirectAdress} >
        <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>  Adresse Agence Tunis :  </span>
        Rue anatole, Cité Ennasr, Ariana 2037
             </span>

             <br/><br/>
            <span  onClick={RedirectAdress} >
        <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>  Adresse Agence Monastir :  </span>
        MV8V+Q66, Rue de l'Indépendance, Sayada, Monastir
             </span>

            </Text>
            <Button>
              <a href="#">Read more</a>
            </Button>
          </div>
        </Grid>
        <Grid container xl={6} lg={12}>
          <AdvertisingContainer container>
            <img src="./assets/banner1.jpg" alt="" />
            <img src="./assets/banner2.jpg" alt="" />
          </AdvertisingContainer>
        </Grid>
      </Grid>
    </DescriptionSection>
  );
};

export default Description;
