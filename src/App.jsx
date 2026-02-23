import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResources from "./pages/SearchResources";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";

function App() {
  // --- Resource State ---
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("library_resources");
    return savedResources ? JSON.parse(savedResources) : [
      { id: 1, title: "Operating Systems.pdf", category: "CS" },
      { id: 2, title: "Computer Networks.pdf", category: "CS" },
      { id: 3, title: "Research Paper AI.pdf", category: "AI" },
    ];
  });

  // --- Login State ---
  const [user, setUser] = useState(() => {
    return localStorage.getItem("app_user") || null;
  });

  // Sync resources to localStorage
  useEffect(() => {
    localStorage.setItem("library_resources", JSON.stringify(resources));
  }, [resources]);

  // Sync user session to localStorage
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

  const handleLogin = (role) => {
    setUser(role);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      {/* 1. Navbar is OUTSIDE the Routes so it stays at the top.
        2. No wrapping <div> here to prevent white space gaps. 
      */}
      <Navbar user={user} onLogout={handleLogout} />
      
      <Routes>
        {/* PUBLIC ROUTE: Everyone sees Home first */}
        <Route path="/" element={<Home />} />
        
        {/* LOGIN ROUTE */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* PROTECTED ROUTES */}
        <Route 
          path="/search" 
          element={user ? <SearchResources resources={resources} /> : <Navigate to="/login" />} 
        />
        
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
        
        {/* CATCH-ALL: Redirect unknown pages to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;