import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () =>{
  return (
    <body>

        <div class="topnav">
          <a>
            <Link to="/">Realtime</Link>
          </a>
          <a>
            <Link to="/report">Report</Link>
          </a>
        </div>

      <Outlet />
    </body>
  );
}
export default Navbar;