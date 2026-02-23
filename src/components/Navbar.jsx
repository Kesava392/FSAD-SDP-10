import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Resource Library</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;