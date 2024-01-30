import "./CreateMovie.css"
import { useState } from "react";

const CreateMovie = () => {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/v1/movie", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
      };
      
    return(
        <div className='form'>
            <h2>Create Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default CreateMovie;