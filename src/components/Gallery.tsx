import { Button, Carousel, Col, Row, Typography } from "antd";
import { Image } from "antd";
import characters from "../characters.json";
import { createRef } from "react";
import { CarouselRef } from "antd/es/carousel";
const { Text, Title } = Typography;

type CharacterType = {
  name: string;
  text: string;
  title: string;
};

const Gallery = () => {
  let carouselRef = createRef<CarouselRef>();
  const item = (character: CharacterType) => {
    return (
      <div>
        <Title level={2} style={{ margin: "0.2em" }}>
          {character.name.toUpperCase()}
        </Title>
        {character.title}
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <div className="front-content">
                <Image src={`images/${character.name}.png`} />
              </div>
            </div>
            <div className="back">
              <div className="back-content">
                <Text>{character.text}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Row>
        <Col span={8}>
          <Button onClick={() => carouselRef?.current?.prev()}>{"<"}</Button>
        </Col>
        <Col span={8}>
          <Carousel ref={carouselRef}>{characters.map(item)}</Carousel>
        </Col>
        <Col span={8}>
          <Button onClick={() => carouselRef?.current?.next()}>{">"}</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
