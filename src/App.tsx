import "./App.css";
import DiamondContainer from "./Components/DiamondContainer";
import data from "./assets/data/data";

function App() {
  return (
    <>
      <h1>Diamond World</h1>
      <DiamondContainer data={data} />
    </>
  );
}

export default App;
