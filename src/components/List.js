import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  let token = null;


  return (
    <div className="row">
      <div className="col-3 px-0" style={{ border: "1px solid red" }}>
        <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Movie Title</h5>
            <p class="card-text">
              Review Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, dolorem.
            </p>
            <Link to="/" class="btn btn-primary">
              View details
            </Link>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default List;
