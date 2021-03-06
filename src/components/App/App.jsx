import "./App.css";
import Applications from "../Applications/Applications";
import Header from "../Header/Header";

function App() {
  document.title = "iwoca | Application Portal";
  return (
    <div className="App">
      <Header />
      <Applications />
    </div>
  );
}

export default App;
