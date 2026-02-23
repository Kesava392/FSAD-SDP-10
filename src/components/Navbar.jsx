import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1e293b",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ color: "white" }}>Resource Library</h2>

      <div>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/admin" style={{ color: "white", marginRight: "15px" }}>
          Admin
        </Link>
        <Link to="/search" style={{ color: "white" }}>
          Search
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;