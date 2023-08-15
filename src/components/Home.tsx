import { Image, List, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

type HomePropsType = {
    collections: string[];
};

const Home = ({ collections }: HomePropsType) => {
    const navigate = useNavigate();
    const data = collections.map(collection =>
        <Space direction='vertical'>
            <Title level={3}>{collection.toUpperCase()}</Title>
            <Image height="200px" onClick={() => navigate(collection)} preview={false} src={`images/${collection}/cover.png`} />
        </Space>);

    return <>
        <Title underline>Mythologie</Title>
        <List split={false} dataSource={data} renderItem={(item) => <List.Item style={{ justifyContent: "center" }}>{item}</List.Item>} />
    </>
};

export default Home;