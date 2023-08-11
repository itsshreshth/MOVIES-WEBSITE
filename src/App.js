import {useState, useEffect} from "react";
//c06d8de
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com?apikey=c06d8de';
const movie = {
    
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
    
}
const App = ()=>
{
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    
    useEffect(()=>{
        searchMovies("marvel");
    },[]);
    
    const searchMovies =async(title)=>{
               const response = await fetch (`${API_URL}&s=${title}`);
               const data = await response.json();
              setMovies(data.Search);
           }
    return(
      <div className="app">
        <h1>MoviesVerse</h1>
        <div className="search">
            <input
            placeholder="search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        {
            movies?.length>0 ?
            (
                <div className="container">
                 
                  {movies.map((movie) =>(
                    <MovieCard movie ={movie}/>
                  ))}
                  </div>
            ) :
            (
                <div className="empty">
                    <h2>No Movies Found</h2>
                 </div>   
            )
        }
       
        </div>
      
    );
};
export default App;