import React, { useEffect } from "react";
import styled from "styled-components";
import { SlideText } from "../atoms/Font";
import Button from "../atoms/Button";

const Parallax = styled.div`
  width: 100%;
  height: 100%;
  background: url("./assets/parallax1.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-x: 50%;
`;

const BannerContent = styled.div`
  background-color: transparent;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: start;
  padding: 0 10%;
  font-size: 2rem;

  span {
    color: #f2c40e;
  }

  .banner-btn {
    color: #fff;
    border: 2px solid #fff;
    padding: 20px 30px;
  }

  .banner-btn:hover {
    background-color: #f2c40e;
    color: #111;
    border-color: #f2c40e;

    a {
      color: #222;
    }
  }
  .banner-btn a {
    font-size: 1.2rem;
  }
`;

const Banner = () => {
  const handleScroll = () => {
    let parallax = document.querySelector(".parallax");
    let bannerPositionY = document
      .querySelector(".banner-section")
      .getBoundingClientRect().top;

    parallax.style.backgroundPositionY = (bannerPositionY - 100) * 0.85 + "px";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="banner-section">
      <Parallax className="parallax">
        <BannerContent>
          <SlideText>
            <p>Louer votre voiture </p>
            <p>Au meilleur prix</p>
            <p>En Tunisie</p>
            <p className="banner-price">
              A partir de <span>70DT/jour</span>
            </p>
            {/* <Button className="banner-btn">
              <a href="">More details</a>
            </Button> */}
          </SlideText>
        </BannerContent>
      </Parallax>
    </div>
  );
};

export default Banner;
