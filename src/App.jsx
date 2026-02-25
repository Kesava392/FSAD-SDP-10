import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResources from "./pages/SearchResources";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Contact from "./pages/Contact"; 

function App() {
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("library_resources_v2");
    return savedResources ? JSON.parse(savedResources) : [
      { id: 1, title: "Operating Systems.pdf", category: "CS" },
      { id: 2, title: "Computer Networks.pdf", category: "CS" },
      { id: 3, title: "Neural Networks 101", category: "AI" },
      { id: 4, title: "Ethical Hacking Guide", category: "Cyber" },
      { id: 5, title: "Statistics for Data Science", category: "Data" },
      { id: 6, title: "Clean Code: A Handbook", category: "SE" },
      { id: 7, title: "AWS Cloud Practitioner", category: "Cloud" },
      { id: 8, title: "The Design of Everyday Things", category: "UX" },
      { id: 9, title: "Modern Physics Fundamentals", category: "Phys" },
      { id: 10, title: "Micro-Biology Research", category: "Bio" },
      { id: 11, title: "Corporate Finance Basics", category: "Fin" },
      { id: 12, title: "Digital Marketing Strategy", category: "Mkt" },
      { id: 13, title: "Discrete Mathematics", category: "Math" },
      { id: 14, title: "Blockchain Revolution", category: "Fin" }
    ];
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem("app_user") || null;
  });

  useEffect(() => {
    localStorage.setItem("library_resources_v2", JSON.stringify(resources));
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
        
        {/* Contact page is public so anyone can reach out */}
        <Route path="/contact" element={<Contact />} /> 
        
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
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
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;