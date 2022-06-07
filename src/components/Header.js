import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header >
      <nav class="navbar navbar-dark bg-dark " role="navigation">
        
        <ul class="list-inline ms-5 ">
          <li class="list-inline-item text-light align-middle"><h4 >AlkeChallenge</h4></li>
          <li class="list-inline-item align-middle">
            <Link to="/" class="text-light text-decoration-none">Home</Link>
          </li>
          <li class="list-inline-item align-middle">
            <Link to="/" class="text-light text-decoration-none">List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
