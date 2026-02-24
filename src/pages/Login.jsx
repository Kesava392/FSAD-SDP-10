import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAction = (e) => {
    e.preventDefault();

    // 1. GET EXISTING USERS FROM STORAGE (OR EMPTY ARRAY)
    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

    if (isNewUser) {
      // REGISTRATION LOGIC
      const newUser = { email, username, password, role: "learner" };
      
      // Save new user to the list
      storedUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));
      
      alert("Registration Successful! Now you can login.");
      setIsNewUser(false); // Switch to login view
      setEmail(""); // Clear email
    } else {
      // LOGIN LOGIC
      
      // A. Check Hardcoded Admin
      if (username === "admin" && password === "k392d100076k344") {
        onLogin("admin");
        navigate("/admin");
        return;
      }

      // B. Check Registered Users in LocalStorage
      const userExists = storedUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (userExists) {
        onLogin(userExists.role);
        navigate("/search");
      } else {
        alert("Invalid Credentials! Please check your username/password or register.");
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>{isNewUser ? "Create Account" : "System Login"}</h2>
        <p>{isNewUser ? "Enter your email to get started" : "Access the Management Dashboard"}</p>
        
        <form onSubmit={handleAction} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {isNewUser && (
            <input 
              type="email" 
              placeholder="Mail ID" 
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