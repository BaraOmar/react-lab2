import { useParams } from "react-router-dom";

function MoviesDetails() {
    const { id } = useParams();

    return (
        <h1>{ id }</h1>
    )
}

export default MoviesDetails;