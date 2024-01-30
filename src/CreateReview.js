import "./CreateReview.css"
import { useState } from "react";

const CreateReview = () => {
    const [formData, setFormData] = useState({
        movieId: 0,
        userId: 0,
        comment: "",
        rating: 0.0
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8082/v1/review", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
      };
      
    return(
        <div className='form'>
            <h2>Create Review</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="movieId">Movie Id:</label>
                    <input
                    type="number"
                    id="movieId"
                    name="movieId"
                    value={formData.movieId}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="userId">User Id:</label>
                    <input
                    type="number"
                    id="userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <input
                    type="text"
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input
                    type="number"
                    id="rating"
                    name="rating"
                    step={0.1}
                    max={10}
                    min={0}
                    value={formData.rating}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default CreateReview;