import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>{
  return (
    <body>
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">Report</button>
          <div class="dropdown-content">
            <Link to="/monthly">monthly</Link>
            <a href="#">yearly</a>
            <Link to="/table">table</Link>
          </div>
        </div> 
        <a> <Link to="/">Realtime</Link> </a>
      </div>
      <Outlet />
    </body>
  );
}
export default Navbar;