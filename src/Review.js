import './Review.css'

const Review = (props) => {
    return(
        <li className="review-li" key={props.id}>
            <div className="field-userName"><strong>{props.userName}</strong></div>
            <div className="field-comment">{props.comment}</div>
            <div className="field-rating"><strong>{props.rating}</strong></div>
            
        </li>
    );
}
export default Review;