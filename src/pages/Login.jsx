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
    } else if (username === "student" && password === "student123") {
      onLogin("user");
      navigate("/search");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <h2>Login</h2>
        <form onSubmit={handleSignIn} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Sign In</button>
        </form>
        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          Admin: admin/admin123 | User: student/student123
        </p>
      </div>
    </div>
  );
}

export default Login;