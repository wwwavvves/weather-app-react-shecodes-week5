import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-md">
        <Weather defaultCity="Lisbon" />
      </div>
    </div>
  );
}

export default App;
