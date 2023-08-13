import { Button, Carousel, Row, Typography } from "antd";
import { createRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

type CharacterType = {
  name: string;
  text: string;
  title: string;
};

type GalleryPropsType = {
  collection: string;
  characters: CharacterType[];
}

const Gallery = ({ collection, characters }: GalleryPropsType) => {
  let carouselRef = createRef<CarouselRef>();
  const item = (character: CharacterType, id: number) => {
    return (
      <div key={id}>
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
              <div
                className="front-content"
                style={{
                  backgroundImage: `url(images/${collection}/${character.name}.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="back">
              <div
                className="back-content"
                style={{
                  backgroundImage: `url(images/${collection}/back.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
