import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import MoviesDetails from "./Components/MoviesDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Movies/:id" element={<MoviesDetails/>} />

        </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
