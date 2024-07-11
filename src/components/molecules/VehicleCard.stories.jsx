import VehicleCard from "./VehicleCard";
import img from "../../../public/assets/vehicle1.jpg";

export default {
  title: "Components/Molecules/VehicleCard",
  component: VehicleCard,
};

export const Default = () => (
  <VehicleCard
    img={img}
    title="Lorem ipsum dolor sit amet"
    price="1.899"
    description="300 KM INCLUDED PER DAY"
  />
);
