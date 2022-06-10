import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem('token')
  return (
    <header >
      <nav className="navbar navbar-dark bg-dark " role="navigation">
        
        <ul className="list-inline ms-5 ">
          <li className="list-inline-item text-light align-middle"><h4 >AlkeChallenge</h4></li>
          <li className="list-inline-item align-middle">
            <Link to={token ? "/list" : "/"} className="text-light text-decoration-none">Home</Link>
          </li>
          <li className="list-inline-item align-middle">
            <Link to={token ? "/list" : "/"} className="text-light text-decoration-none">List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
