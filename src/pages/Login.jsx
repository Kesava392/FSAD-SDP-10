import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onLogin }) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAction = async (e) => {
    e.preventDefault();

    try {
      if (isNewUser) {
        // Registration: POST to backend
        const response = await axios.post("http://localhost:8082/users/register", {
          username,
          password,
          email
        });
        alert(response.data); // Show backend message
        setIsNewUser(false); // Switch to login view
        setEmail("");
        setUsername("");
        setPassword("");
      } else {
        // Login: POST to backend
        const response = await axios.post("http://localhost:8082/users/login", {
          username,
          password
        });

        if (response.status === 200) {
          alert(response.data); // Login Successful
          onLogin(username); // store username in parent component
          navigate("/search"); // redirect after login
        }
      }
    } catch (error) {
      // Show backend error message
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>{isNewUser ? "Create Account" : "System Login"}</h2>
        <p>{isNewUser ? "Enter your details to get started" : "Access the Management Dashboard"}</p>
        
        <form onSubmit={handleAction} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {isNewUser && (
            <input 
              type="email" 
              placeholder="Email" 
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          <input 
            type="text" 
            placeholder="Username" 
            className="login-input"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <button type="submit" className="login-submit-btn">
            {isNewUser ? "Register" : "Sign In"}
          </button>
        </form>

        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={() => setIsNewUser(!isNewUser)}
            style={{ background: "none", border: "none", color: "#2563eb", cursor: "pointer", textDecoration: "underline" }}
          >
            {isNewUser ? "Already have an account? Login" : "New user? Create account"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;