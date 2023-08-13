import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';

type HomePropsType = {
    collections: string[];
};

const Home = ({ collections }: HomePropsType) => {
    const navigate = useNavigate();

    return <div>
        {collections.map(collection =>
            <div>
                {collection}
                <Image height="200px" onClick={() => navigate(collection)} preview={false} src={`images/${collection}/cover.png`} />
            </div>
        )}
    </div >
};

export default Home;