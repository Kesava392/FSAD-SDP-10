import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Updated logic to use 'learner' instead of 'student'
    if (username === "admin" && password === "admin123") {
      onLogin("admin");
      navigate("/admin");
    } else if (username === "learner" && password === "plokijuhyg123") {
      onLogin("learner"); // This matches the new terminology
      navigate("/search");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="container">
      {/* The .card class from your main.css handles the white background and shadow */}
      <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#0f172a" }}>Login</h2>
        <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}
          />
          {/* This button will use the blue style from your main.css */}
          <button type="submit">Sign In</button>
        </form>
        
        <div style={{ fontSize: "12px", marginTop: "20px", color: "#64748b", textAlign: "center" }}>
          <p><strong>Admin:</strong> admin / admin123</p>
          <p><strong>Learner:</strong> learner / qawsedrftg123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;