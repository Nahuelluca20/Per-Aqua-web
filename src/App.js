import "./App.css";
import Home from "pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
      </div>
  );
}

export default App;
