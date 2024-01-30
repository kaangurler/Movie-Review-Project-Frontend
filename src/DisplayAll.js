import './DisplayAll.css';
import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const DisplayAll = () => {
    const [movies, setMovies] = useState([]); 
    useEffect(() => {
        fetch("http://localhost:8080/v1/movie")
            .then((res) => res.json())
            .then((data) => setMovies(data));
        });
    return(
        <div className='display-all'>
            <h2>MOVIES</h2>
                <ul>
                    {movies.map((movie) => (
                        <Movie 
                            id = {movie.id} 
                            title = {movie.title} 
                            genre = {movie.genre} 
                            rating = {movie.rating}>
                        </Movie>
                    ))}
                </ul>               
        </div>
    );
}

export default DisplayAll;