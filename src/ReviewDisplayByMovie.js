import './DisplayAll.css';
import React, { useState, useEffect } from 'react';
import Review from './Review';
import { useParams } from 'react-router-dom';

const ReviewDisplayByMovie = () => {
    const [reviews, setReviews] = useState([]); 
    const [title, setTitle ]= useState("");
    const parameter = useParams();
    
    useEffect(() => {
        fetch("http://localhost:8080/v1/movie/" + parameter.id + "/get-name")
            .then((res) => res.text())
            .then((title) => setTitle(title));
        
        fetch("http://localhost:8082/v1/review/get-by-movie/" + parameter.id)
            .then((res) => res.json())
            .then((data) => setReviews(data));
        });
    if(reviews.length === 0) {
        return(
             <div className='no-review-message'>
                <h3>NO REVIEW FOUND</h3>
            </div>
         );
    }
    else {
        return(
            <div className='display-all'>
                <h2>REVIEWS OF {title}</h2>
                    <ul>{reviews.map((review) => (
                        <Review
                            id = {review.id} 
                            userName = {review.userName} 
                            movieTitle = {review.movieTitle}
                            comment = {review.comment}
                            rating = {review.rating}>
                        </Review>
                    ))}
                </ul>
            </div>
        );
    }
    
}
export default ReviewDisplayByMovie;