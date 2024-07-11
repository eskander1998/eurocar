import Description from "./Description";

export default {
  title: "Components/Templates/Description",
  component: Description,
};

export const Usage = (args) => <Description {...args} />;

Usage.args = {
  children: "Description",
};
