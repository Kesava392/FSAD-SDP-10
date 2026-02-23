import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResources from "./pages/SearchResources";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login"; // You will need to create this file

function App() {
  // --- Resource State (Existing) ---
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("library_resources");
    return savedResources ? JSON.parse(savedResources) : [
      { id: 1, title: "Operating Systems.pdf", category: "CS" },
      { id: 2, title: "Computer Networks.pdf", category: "CS" },
      { id: 3, title: "Research Paper AI.pdf", category: "AI" },
    ];
  });

  // --- Login State (New) ---
  // Tracks if the user is null, 'student', or 'admin'
  const [user, setUser] = useState(() => {
    return localStorage.getItem("app_user") || null;
  });

  useEffect(() => {
    localStorage.setItem("library_resources", JSON.stringify(resources));
  }, [resources]);

  // Save user session to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("app_user", user);
    } else {
      localStorage.removeItem("app_user");
    }
  }, [user]);

  const addResource = (newResource) => {
    const resourceWithId = { ...newResource, id: Date.now() };
    setResources((prev) => [...prev, resourceWithId]);
  };

  const deleteResource = (id) => {
    setResources(resources.filter(item => item.id !== id));
  };

  // Login handler
  const handleLogin = (role) => {
    setUser(role);
  };

  // Logout handler
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      {/* Pass user and logout function to Navbar */}
      <Navbar user={user} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Protected Search Route: accessible to both student and admin */}
        <Route 
          path="/search" 
          element={user ? <SearchResources resources={resources} /> : <Navigate to="/login" />} 
        />
        
        {/* Protected Admin Route: strictly for admin only */}
        <Route 
          path="/admin" 
          element={
            user === "admin" ? (
              <AdminDashboard 
                resources={resources} 
                addResource={addResource} 
                deleteResource={deleteResource} 
              />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;