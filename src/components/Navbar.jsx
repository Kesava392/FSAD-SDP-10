import { Link } from "react-router-dom";

// user: the current logged-in state ('admin', 'learner', or null)
// onLogout: the function that clears the user session
function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h2 className="logo">Resource Library</h2>
        <div className="nav-links">
          {/* ALWAYS VISIBLE LINKS */}
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/contact" className="nav-item">Contact Us</Link>

          {/* Show Admin link only for admins */}
          {user === "admin" && (
            <Link to="/admin" className="nav-item">Admin</Link>
          )}

          {/* Show Search link for any logged-in user */}
          {user && (
            <Link to="/search" className="nav-item">Search</Link>
          )}

          {/* Toggle between Login and Logout */}
          {user ? (
            <button 
              onClick={onLogout} 
              className="logout-button"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-button">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;