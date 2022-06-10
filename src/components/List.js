import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=d138e7809543917104c5d93b8b57e098&language=en-EN&page=1";
    axios.get(endpoint)
    .then((response) => {
      setMovieList(response.data.results);
    });
  }, [setMovieList]);

  console.log(movieList)

  return (
    <div className="row">
    { movieList.map((movie, index) => {
      return (
        <div className="col-3" key={index} >
        <div className="card my-4" >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.title.substring(0, 20)}...</h5>
            <p className="card-text">
              {movie.overview.substring(0, 100)}...
            </p>
            <Link to={`/detail?movieID=${movie.id}`} className="btn btn-primary">
              View details
            </Link>
          </div>
        </div>
      </div>
      )
    }) }
      {!token && navigate("/", { replace: true })}
      
    </div>
  );
};

export default List;
