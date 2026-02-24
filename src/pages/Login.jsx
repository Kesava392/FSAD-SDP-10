import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      onLogin("admin");
      navigate("/admin");
    } else if (username === "learner" && password === "plokijuhyg123") {
      onLogin("learner");
      navigate("/search");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    /* Changed from 'container' to 'login-wrapper' to show login-bg.jpg */
    <div className="login-wrapper">
      <div className="login-card">
        <h2>System Login</h2>
        <p>Access the Management Dashboard</p>
        
        <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input 
            type="text" 
            placeholder="Username" 
            className="login-input"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>
        
        <div style={{ fontSize: "12px", marginTop: "20px", color: "#64748b", textAlign: "center" }}>
          <p><strong>Admin:</strong> admin / admin123</p>
          <p><strong>Learner:</strong> learner / plokijuhyg123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;