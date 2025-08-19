import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import MoviesDetails from "./Components/MoviesDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Movies/:id" element={<MoviesDetails/>} />

        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
