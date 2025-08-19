import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState, useEffect } from 'react';


function Movies() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8def0ea86d6031f9df932ad8968028cf")
            .then((response) => {
                setData(response.data.results.slice(0, 10)); // get just the first 10 for display
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });

    }, []);

    return (
        <>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <h1>Movies</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    // <p>nothing</p>
                    <ul style={{ listStyle: "none", padding: 0 , display: "flex"}}>
                        {data.map((data, index) => (
                            <li key={index}>
                                <Link to={`/movies/${data.overview}`} style={{ margin: " 10px" }}>
                                    <strong>{data.title}</strong>
                                    <br />
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                        alt={data.title}
                                        style={{ width: "200px", borderRadius: "10px" }}
                                    />
                                    <br />
                                </Link>

                                <br />
                            </li>
                        ))}
                    </ul>


                )}
            </div>
        </>
    )
}

export default Movies;