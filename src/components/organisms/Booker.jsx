import React, { useState }  from "react";
import styled from "styled-components";
import { Text } from "../atoms/Font";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {vehicleCards} from "../../data.js";
import { Modal } from 'react-bootstrap';


const Container = styled.div`
  background-color: #141311;
  box-sizing: border-box;
  padding: 5%;

  @media screen and (min-width: 1172px) {
    position: absolute;
    padding: 30px;
    width: 25%;
    height: auto;
    top: 20%;
    right: 5%;
    z-index: 1;
  }

  @media screen and (max-width: 1500px) and (min-width: 1172px) {
    padding: 15px;
    padding-bottom: 10px;
    top: 16%;
  }

  .subtitle {
    color: #fff;
    text-transform: uppercase;
    border-bottom: 5px solid #ffd018;
    padding-bottom: 5px;
  }

  .label {
    color: #bbb;
  }

  .submit-btn {
    background-color: #ffd018;
    border: none;
    border-radius: 0px;
    color: #191509;
    width: 100%;
    padding: 10px;
    margin: 0;
    margin-top: 20px;
    font-family: "fjallaOne";
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .booker-label {
    font-family: "fjallaOne";
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px #191509;
    color: #fff;
    line-height: 1.2;
  }
`;

const Booker = () => {

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleShowModal(); 
  };

  return (
    <Container>
      <p className="booker-label">Réserver votre voiture</p>
      <Text className="subtitle">Appeler le + 216 97025700</Text>
      <Form onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Label className="label">Date de départ</Form.Label>
        <Form.Control type="date" />
        <Form.Label className="label">Date d'arrivée</Form.Label>
        <Form.Control type="date" />
        <Form.Label className="label">Car model</Form.Label>
        <Form.Select>
          <option>Choix de la voiture</option>
          { vehicleCards.map}
          {vehicleCards.map((vehicle) => (
          <option>{vehicle.title}</option>

      ))}
        </Form.Select>
        <Form.Label className="label">Votre numéro de tél.</Form.Label>
        <Form.Control type="text" placeholder="0011223344"/>

        <Button type="submit" className="submit-btn">
          Contactez-Nous
        </Button>
      </Form.Group>
      </Form>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Réservation en ligne non disponible momentanèment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              Merci de nous joindre au <span style={{ fontWeight: 'bold'}}>+216 97 025 700</span>. <br/><br/>Disponible également sur <span style={{ fontWeight: 'bold'}}>  WhatsApp.</span><br/><br/>Nous vous souhaitons la bienvenue chez Euro Car.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Booker;
