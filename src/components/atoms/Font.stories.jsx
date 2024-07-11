import { Title, Text, Bold, SlideText } from "./Font";

export default {
  title: "Components/Atoms/Font",
  component: Title,
};

export const FontTitle = () => (
  <Title>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </Title>
);

export const FontText = () => (
  <Text>
    Sed porttitor est lorem, eu tempor elit molestie tempus. Donec molestie non
    arcu non aliquam.
  </Text>
);

export const FontBold = () => (
  <Bold>
    Sed porttitor est lorem, eu tempor elit molestie tempus. Donec molestie non
    arcu non aliquam.
  </Bold>
);

export const FontSlideText = () => (
  <SlideText>
    Sed porttitor est lorem, eu tempor elit molestie tempus. Donec molestie non
    arcu non aliquam.
  </SlideText>
);
