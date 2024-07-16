import React from "react";
import styled from "styled-components";
import { Title } from "../atoms/Font";
import { FaWhatsapp } from 'react-icons/fa';

const ServicesContainer = styled.div`
  display: flex;
  max-height: 650px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    max-height: 100%;
  }
`;

const StatesSection = styled.div`
  background-color: #141311;
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 100%;
  max-height: 100%;

  a {
    color: #adaba6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h2 {
    color: #fff;
  }
`;

const StatesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 100%;
  padding-bottom: 40px;

  a {
    margin: 0 10px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    max-height: 700px;
  }
`;

const Services = styled.div`
  background-color: #2a2927;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5%;

  p {
    color: #fff;
  }

  .service {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;


const ContactSection = styled.div`
background-color: #141311;
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 100%;
  max-height: 100%;

  a {
    color: #adaba6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h2 {
    color: #fff;
  }
`;

const TitleContact = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Agency = styled.div`
  margin-bottom: 20px;
`;

const AgencyName = styled.h3`
  margin-bottom: 10px;
  color: #007bff;
`;

const AgencyInfo = styled.p`
  margin: 5px 0;
  color: #fff;
`;

const WhatsAppIcon = styled(FaWhatsapp)`
  margin-left: 10px;
  color: #25d366;
`;

const Highlight = styled.span`
  color: #f2c40e;
`;

const ResponsiveIframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* This is for a 16:9 aspect ratio */
`;

const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;


const ContactArea = () => {
  return (
    <ServicesContainer id="contact">
      <StatesSection>
        <Title id="service-area">
          <h2>Localisation</h2>
        </Title>

        <ResponsiveIframeContainer>
          <ResponsiveIframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.9113698862102!2d10.174955816996897!3d36.868946747489105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbd82f06cec9%3A0xe7af7418b59a481c!2sEuro%20Car%20Ennasr%20(location%20de%20voiture)!5e0!3m2!1sfr!2stn!4v1720622173755!5m2!1sfr!2stn"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ResponsiveIframeContainer>
{/*         
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.9113698862102!2d10.174955816996897!3d36.868946747489105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbd82f06cec9%3A0xe7af7418b59a481c!2sEuro%20Car%20Ennasr%20(location%20de%20voiture)!5e0!3m2!1sfr!2stn!4v1720622173755!5m2!1sfr!2stn"
         width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
         </iframe> */}
   
      </StatesSection>

      <ContactSection>
      <Title id="service-area">
          <h2>Contact</h2>
      </Title>

      <Agency>
        <AgencyName>Agence Tunis</AgencyName>
        <AgencyInfo><Highlight>Adresse </Highlight>: Rue anatole, Ariana 2037</AgencyInfo>
        <AgencyInfo><Highlight>Téléphone</Highlight> : +216 97 025 700<WhatsAppIcon size={20} /></AgencyInfo>
        <AgencyInfo><Highlight>Horaires </Highlight>: Lundi - Dimanche, 8:00 - 00:00</AgencyInfo>
      </Agency>
      <Agency>
        <AgencyName>Agence Monastir</AgencyName>
        <AgencyInfo><Highlight>Adresse</Highlight> : MV8V+Q66, Rue de l'Indépendance, Sayada, Monastir</AgencyInfo>
        <AgencyInfo><Highlight>Téléphone</Highlight> : +216 98 242 670<WhatsAppIcon size={20} />
        </AgencyInfo>
        <AgencyInfo><Highlight>Horaires</Highlight> : Lundi - Dimanche, 8:00 - 00:00</AgencyInfo>
      </Agency>

     </ContactSection>

      <Services>
      
          <div>
            <p className="service">Pas de frais caché</p>
            <img src="../assets/gal1.png"></img>
          </div>
        
          <div>
            <p className="service">Livraison aéroport</p>
            <img src="../assets/gal1.png"></img>
          </div>

          <div>
            <p className="service">Tarif abordable</p>
            <img src="../assets/gal1.png"></img>
          </div>

          <div>
            <p className="service">Disponible 7/7J</p>
            <img src="../assets/gal1.png"></img>
          </div>

      </Services>
    </ServicesContainer>
  );
};

export default ContactArea;
