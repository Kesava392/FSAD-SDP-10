import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResources from "./pages/SearchResources";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Contact from "./pages/Contact"; // 1. IMPORT THE NEW PAGE

function App() {
  // ... (Keep all your existing state and functions exactly the same)
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("library_resources");
    return savedResources ? JSON.parse(savedResources) : [
      { id: 1, title: "Operating Systems.pdf", category: "CS" },
      { id: 2, title: "Computer Networks.pdf", category: "CS" },
      { id: 3, title: "Research Paper AI.pdf", category: "AI" },
    ];
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem("app_user") || null;
  });

  useEffect(() => {
    localStorage.setItem("library_resources", JSON.stringify(resources));
  }, [resources]);

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
      <Navbar user={user} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 2. ADD THE CONTACT ROUTE HERE (PUBLIC) */}
        <Route path="/contact" element={<Contact />} /> 
        
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        <Route 
          path="/search" 
          element={user ? <SearchResources resources={resources} /> : <Navigate to="/login" />} 
         Bradley/>
        
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
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;