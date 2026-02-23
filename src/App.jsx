import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResources from "./pages/SearchResources";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // 1. Initialize state from LocalStorage or use default data if empty
  const [resources, setResources] = useState(() => {
    const savedResources = localStorage.getItem("library_resources");
    return savedResources ? JSON.parse(savedResources) : [
      { id: 1, title: "Operating Systems.pdf", category: "CS" },
      { id: 2, title: "Computer Networks.pdf", category: "CS" },
      { id: 3, title: "Research Paper AI.pdf", category: "AI" },
    ];
  });

  // 2. Save to LocalStorage whenever the resources list changes
  useEffect(() => {
    localStorage.setItem("library_resources", JSON.stringify(resources));
  }, [resources]);

  // 3. Function to add a new resource (to be called by AdminDashboard)
  const addResource = (newResource) => {
    const resourceWithId = {
      ...newResource,
      id: Date.now(), // Unique ID based on timestamp
    };
    setResources((prev) => [...prev, resourceWithId]);
  };

  // 4. Function to delete a resource (optional but useful for Admin)
  const deleteResource = (id) => {
    setResources(resources.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Pass resources as props to Search */}
        <Route 
          path="/search" 
          element={<SearchResources resources={resources} />} 
        />
        
        {/* Pass the addResource function as a prop to Admin */}
        <Route 
          path="/admin" 
          element={
            <AdminDashboard 
              resources={resources} 
              addResource={addResource} 
              deleteResource={deleteResource} 
            />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;