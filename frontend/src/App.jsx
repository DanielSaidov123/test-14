import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Seats from "./pages/Seats";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Details/:imdbID" element={<Details/>}/>
        <Route path="/Seats/:imdbID" element={<Seats/>}/>
      </Routes>
    </>
  );
}

export default App;
