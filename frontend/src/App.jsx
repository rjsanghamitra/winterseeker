import "./App.css";
import Homepage from "./homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "./weather-description/index.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Description />} />
        </Routes>
      </BrowserRouter>
      <footer style={{ textAlign: "center" }}>
        Powered by{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          style={{ textDecoration: "none", color: "#7D7C7C" }}
        >
          WeatherAPI.com
        </a>
      </footer>
    </div>
  );
}

export default App;
