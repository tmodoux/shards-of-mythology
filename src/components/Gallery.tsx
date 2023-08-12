import { Button, Carousel, Col, Row, Typography } from "antd";
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
        <Title level={2} style={{ margin: "0.2em" }}>
          {character.name.toUpperCase()}
        </Title>
        <i>{character.title}</i>
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
                <Text
                  style={{
                    fontSize: "20px",
                    lineHeight: "2",
                  }}
                >
                  {character.text}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Row justify="center" align="middle">
        <Col span={6} />
        <Col span={2}>
          <Button
            shape="circle"
            onClick={() => carouselRef?.current?.prev()}
            icon={<LeftOutlined style={{ fontSize: "12px" }} />}
          />
        </Col>
        <Col span={8}>
          <Carousel dots={false} ref={carouselRef}>
            {characters.map(item)}
          </Carousel>
        </Col>
        <Col span={2}>
          <Button
            shape="circle"
            onClick={() => carouselRef?.current?.next()}
            icon={<RightOutlined style={{ fontSize: "12px" }} />}
          />
        </Col>
        <Col span={6} />
      </Row>
    </div>
  );
};

export default Gallery;
