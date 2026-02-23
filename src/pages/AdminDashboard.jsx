import { useState } from "react";

function AdminDashboard({ resources, addResource, deleteResource }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("CS");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please enter a title");
    
    addResource({ title, category });
    setTitle(""); // Clear input
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#1e293b", // Matches your Navbar
        color: "white",
        padding: "20px",
      }}>
        <h3 style={{ borderBottom: "1px solid #334155", paddingBottom: "10px" }}>Admin Panel</h3>
        <p style={{ cursor: "pointer", opacity: 0.8 }}>📊 Dashboard</p>
        <p style={{ cursor: "pointer", color: "#38bdf8" }}>📤 Upload Resource</p>
        <p style={{ cursor: "pointer", opacity: 0.8 }}>⚙️ Manage Resources</p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "40px", flex: 1, backgroundColor: "#f8fafc" }}>
        <h2>Admin Dashboard</h2>

        {/* Upload Form */}
        <div className="card" style={{ marginBottom: "30px" }}>
          <h3>Upload New Resource</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="text"
              placeholder="Resource Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ padding: "8px", flex: 2, borderRadius: "4px", border: "1px solid #ddd" }}
            />
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              style={{ padding: "8px", flex: 1, borderRadius: "4px", border: "1px solid #ddd" }}
            >
              <option value="CS">Computer Science</option>
              <option value="AI">AI & ML</option>
              <option value="Math">Math</option>
            </select>
            <button type="submit" style={{ backgroundColor: "#10b981" }}>Add Resource</button>
          </form>
        </div>

        {/* Resources Table */}
        <h3>Existing Resources</h3>
        <div className="card" style={{ padding: "0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ backgroundColor: "#f1f5f9" }}>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>Title</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>Category</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>{item.title}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>{item.category}</td>
                  <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                    <button 
                      onClick={() => deleteResource(item.id)}
                      style={{ backgroundColor: "#ef4444", padding: "5px 10px", fontSize: "12px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {resources.length === 0 && (
            <p style={{ padding: "20px", textAlign: "center" }}>No resources available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;