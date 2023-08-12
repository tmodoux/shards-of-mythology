import { Button, Carousel, Row, Typography } from "antd";
import { Image } from "antd";
import characters from "../characters.json";
import { createRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
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
        <br />
        <Row justify={"space-around"} align={"middle"}>
          <Button
            shape="circle"
            onClick={() => carouselRef?.current?.prev()}
            icon={<LeftOutlined style={{ fontSize: "90%" }} />}
          />
          <Title level={3} style={{ margin: "0.2em" }}>
            {character.name.toUpperCase()}
          </Title>
          <Button
            shape="circle"
            onClick={() => carouselRef?.current?.next()}
            icon={<RightOutlined style={{ fontSize: "90%" }} />}
          />
        </Row>
        <i>{character.title}</i>
        <br />
        <br />
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <div className="front-content">
                <Image preview={false} src={`images/${character.name}.png`} />
              </div>
            </div>
            <div className="back">
              <div
                className="back-content"
                style={{
                  backgroundImage: "url(images/back.png)",
                  backgroundSize: "cover",
                }}
              >
                <Text>{character.text}</Text>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  };
  return (
    <div>
      <Carousel dots={false} ref={carouselRef}>
        {characters.map(item)}
      </Carousel>
    </div>
  );
};

export default Gallery;
