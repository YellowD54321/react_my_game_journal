import Header from "./components/Haeder";
import Videogames from "./components/Videogames";
import data from "./data.js";

const gameData = data.map((item) => {
  return <Videogames key={item.id} {...item} />;
});

function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-list">{gameData}</div>
    </div>
  );
}

export default App;
