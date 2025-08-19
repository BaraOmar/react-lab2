import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Navbar (){

    return(
       <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/movies" style={{ margin: "0 10px" }}>List of Movies</Link>
        </nav>
    )
}

export default Navbar;