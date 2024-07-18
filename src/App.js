import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
