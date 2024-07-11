import MenuBar from "../molecules/MenuBar";
import Description from "../templates/Description";
import Footer from "../templates/Footer";
import Hero from "../molecules/Hero";
import Cards from "../templates/Cards";
import ContactArea from "../templates/ContactArea";
import Banner from "../molecules/Banner";
import VehicleCards from "../templates/VehicleCards";

const Home = () => {
  return (
    <>
      <MenuBar />
      <Hero />
      <Description />
      {/* <Cards /> */}
      <Banner />
      <VehicleCards />
      <ContactArea />
      <Footer />
    </>
  );
};

export default Home;
