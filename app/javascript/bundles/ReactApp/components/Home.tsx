import React, {useState} from 'react';

const Home = ({movieArray}) => {

    const [counter, setCounter] = useState(0)
    const [movies, setMovies] = useState([movieArray[0]])
    console.log(movies)
    const addMovie = () => {
        setMovies([...movies, movieArray[movies.length]])
    }
    return(
        <>
            <h3>SPA APP</h3>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)} className="btn btn-success m-1">Increase Counter</button>
            <button onClick={addMovie} className="btn btn-warning m-1">Add Movie from Rails</button>
            <h3 className="mt-2">Movies</h3>
            <ul>
                {movies.map((movie) => <li key={movie.id}>{movie.name}</li>)}
            </ul>
        </>
    )
}

export default Home