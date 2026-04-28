import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios"; // 1. IMPORT AXIOS
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResources from "./pages/SearchResources";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  // Use the correct backend URL
 const API_URL = "https://fsad-sdp-10-backend-production.up.railway.app/api/books";

  // Initializing state as an empty array (it will be filled by the DB)
  const [resources, setResources] = useState([]);
  const [user, setUser] = useState(() => localStorage.getItem("app_user") || null);

  // 2. FETCH BOOKS FROM BACKEND ON LOAD
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(API_URL);
        setResources(response.data); // Fills state with the 18 seeded books
      } catch (error) {
        console.error("Error fetching books from backend:", error);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("app_user", user);
    } else {
      localStorage.removeItem("app_user");
    }
  }, [user]);

  // 3. ADD RESOURCE TO BACKEND (MYSQL)
  const addResource = async (newResource) => {
    try {
      // We send the object to Spring Boot, which saves it to MySQL
      const response = await axios.post(API_URL, newResource);
      setResources((prev) => [...prev, response.data]);
      alert("Book successfully saved to Database!");
    } catch (error) {
      console.error("Error adding book to backend:", error);
      alert("Failed to save to database.");
    }
  };

  // 4. DELETE RESOURCE FROM BACKEND (MYSQL)
  const deleteResource = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setResources(resources.filter(item => item.id !== id));
      alert("Book deleted from Database!");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleLogin = (role) => setUser(role);
  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* Pass resources to SearchResources for the user view */}
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
