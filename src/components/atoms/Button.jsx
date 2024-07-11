import styled from "styled-components";

const Button = styled.button`
  margin: 15px 0px;
  width: fit-content;
  height: auto;
  padding: 0px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-family: "fjallaOne";
    font-size: 1.1rem;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    transition: color 0.5s;
  }

  a:hover {
    color: #f2c40e;
  }
`;

export default Button;
