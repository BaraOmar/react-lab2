import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./MoviesDetails.css";

function MoviesDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=8def0ea86d6031f9df932ad8968028cf`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="page">
          <h1>Movie Details</h1>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="page">
          <h1>Movie Details</h1>

          <div className="movie-card">
            <div className="poster-wrap">
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data?.title || "Movie poster"}
              />
            </div>

            <div className="title">{data?.title}</div>

            <div style={{ padding: "12px", textAlign: "left" }}>
              <p>{data?.overview || "No overview available."}</p>
              <p><strong>Rating:</strong> {data?.vote_average?.toFixed(1)} / 10</p>
            </div>
          </div>

          <div>
            <Link to="/movies" className="back-link">← Back to Movies</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviesDetails;
