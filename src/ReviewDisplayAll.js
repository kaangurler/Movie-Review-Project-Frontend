import React, { useState, useEffect } from 'react';

const ReviewDisplayAll = () => {
    const [reviews, setReviews] = useState([]); 
    useEffect(() => {
        fetch("http://localhost:8082/v1/review")
            .then((res) => res.json())
            .then((data) => setReviews(data))
        });
    
    
    return(
        <div className='display-all'>
            <h2>REVIEWS</h2>
                <ul>{reviews.map((review) => (
                     <li key={review.id}><strong>User: </strong>{review.userName}
                        <strong> - Movie: </strong>{review.movieTitle}
                        <strong> - Comment: </strong>{review.comment}
                        <strong> - Rating: </strong>{review.rating}
                    </li>
                ))}
                </ul>
        </div>
    );
}    
    
export default ReviewDisplayAll;