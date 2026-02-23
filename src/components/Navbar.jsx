import { Link } from "react-router-dom";

// Accept 'user' and 'onLogout' as props from App.jsx
function Navbar({ user, onLogout }) {
  return (
    <nav>
      <div className="nav-content">
        <h2>Resource Library</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>

          {/* Logic: Only show Admin link if the logged-in user is an admin */}
          {user === "admin" && <Link to="/admin">Admin</Link>}

          {/* Logic: Only show Search link if someone is logged in */}
          {user && <Link to="/search">Search</Link>}

          {/* Logic: Show Logout if logged in, otherwise show Login */}
          {user ? (
            <button 
              onClick={onLogout} 
              style={{ marginLeft: "20px", backgroundColor: "#ef4444" }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;