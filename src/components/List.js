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
      {!token && navigate("/", { replace: true })}
      <div className="col-3 px-0" style={{ border: "1px solid red" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">
              Review Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam, dolorem.
            </p>
            <Link to="/" className="btn btn-primary">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
