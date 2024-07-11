import styled from "styled-components";

export const Text = styled.p`
  line-height: 1.5rem;
  color: #191509;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "fjallaOne";
    text-transform: uppercase;
  }

  h1 {
    font-size: 2rem;
    margin: 15px 0px;
  }

  h2 {
    font-size: 1.7rem;
    border-bottom: 5px solid #666;
    width: fit-content;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
`;

export const Bold = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #191509;
`;

export const SlideText = styled.p`
  font-family: "fjallaOne";
  font-size: 4rem;
  text-transform: uppercase;
  text-shadow: 1px 1px #18180e;
  color: #fff;
  // color: #f2c40e;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 2rem;
  }

  @media (max-width: 370px) {
    font-size: 1.6rem;
  }
`;

export default Text;
