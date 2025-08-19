import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Movies.css";


function Movies() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8def0ea86d6031f9df932ad8968028cf")
            .then((response) => {
                setData(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });

    }, []);

    return (
        <>

            {loading ? (
                <dev className="page">
                    <h1>Movies</h1>
                    <p>Loading...</p>
                </dev>
            ) : (
                <dev className="page">
                    <h1>Movies</h1>

                    <ul className="movies-grid">
                        {data.map((data) => (
                            <li key={data.id} className="movie-card">
                                <Link to={`/movies/${data.id}`} className="card-link">
                                    <div className="poster-wrap">

                                        <img className="poster"
                                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                            alt={data.title}
                                            style={{ width: "200px", borderRadius: "10px" }}
                                        />
                                    </div>
                                    <div className="title">{data.title}</div>

                                </Link>

                                <br />
                            </li>
                        ))}
                    </ul>
                </dev>


            )}
        </>
    )
}

export default Movies;