import {Link} from "react-router-dom";
import './Nav.css';
const Nav = (props) => {

  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3" >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">Delta-News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" onClick={() => props.catHandler('general')} to="/">General</Link></li>
                  <li><Link className="dropdown-item" onClick={() => props.catHandler('sports')} to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" onClick={() => props.catHandler('entertainment')} to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" onClick={() => props.catHandler('buisness')} to="/buisness">buisness</Link></li>
                  <li><Link className="dropdown-item" onClick={() => props.catHandler('technology')} to="/technology">technology</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  )
}
export default Nav;