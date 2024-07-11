import Card from "./Card";

export default {
  title: "Components/Molecules/Card",
  component: Card,
};

export const Usage = () => (
  <Card
    title="Rental"
    text={
      "Aenean sed ante at urna rutrum tempor a at risus. Vivamus congue nisi sed urna egestas, in imperdiet tortor facilisis. "
    }
    img="./assets/card1.jpg"
  />
);
