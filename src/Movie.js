import './Movie.css'
import { useNavigate } from "react-router-dom";

const Movie = (props) => {
    const navigator = useNavigate();

    const employeeNavigation = (id) => {
        navigator("/review/get-by-movie/" + id);
    }

    return(
        <li className="movie-li" key = {props.id}>
            <div className="title-field"><strong>{props.title}</strong></div>
            <div className="rating-field"><strong>{props.rating}</strong></div>
            <div className="genre-field"><strong>{props.genre}</strong></div>
            <button className = "review-page-button" onClick={() => employeeNavigation(props.id)}>Reviews</button>
        </li>
    );
}
export default Movie;