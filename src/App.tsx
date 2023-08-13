import { Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import collections from "./collections.json";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home collections={Object.keys(collections)} />} />
        {Object.entries(collections).map(([collection, characters]) =>
          <Route key={collection} path={`/${collection}`} element={<Gallery collection={collection} characters={characters} />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
