import { useState } from "react";

function AdminDashboard({ resources, addResource, deleteResource }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(""); // Added state for author
  const [category, setCategory] = useState("Computer Science");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Please enter both title and author");
    
    // Sending all three fields to the backend
    addResource({ title, author, category }); 
    
    // Resetting fields after successful add
    setTitle(""); 
    setAuthor(""); 
  };

  return (
    <div className="admin-wrapper">
      <main className="admin-content">
        <header className="content-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b', fontWeight: '800' }}>
            Management Dashboard
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem' }}>
            Create and organize your digital library assets
          </p>
        </header>

        {/* --- UPLOAD SECTION --- */}
        <section className="admin-card">
          <div className="card-header">
            <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Upload New Resource</h3>
          </div>
          <form onSubmit={handleSubmit} className="admin-form" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Resource Title (e.g. Operating Systems Notes)..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="admin-input"
              style={{ flex: '2', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
            />

            {/* NEW: Author Input Field */}
            <input
              type="text"
              placeholder="Author Name..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="admin-input"
              style={{ flex: '1.5', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="admin-select"
              style={{ flex: '1', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="AI">AI & Machine Learning</option>
              <option value="Java">Java Programming</option>
              <option value="Cyber">Cyber Security</option>
              <option value="Data Science">Data Science</option>
              <option value="Software">Software Engineering</option>
              <option value="Cloud">Cloud Computing</option>
              <option value="Math">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Biotech">Biotechnology</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="Graphic">Graphic Design</option>
              <option value="Game">Game Development</option>
              <option value="Business">Business & Management</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance & Accounting</option>
              <option value="English">English & Literature</option>
              <option value="Psychology">Psychology</option>
            </select>
            
            <button type="submit" className="btn-add">Add Resource</button>
          </form>
        </section>

        {/* --- DATA TABLE SECTION --- */}
        <section className="admin-card">
          <div className="card-header">
            <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Existing Resources</h3>
          </div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th> {/* Added Author Header */}
                  <th>Category</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {resources.length > 0 ? (
                  resources.map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontWeight: '500' }}>{item.title}</td>
                      <td style={{ color: '#64748b' }}>{item.author || "N/A"}</td> {/* Displaying Author */}
                      <td><span className="badge">{item.category}</span></td>
                      <td style={{ textAlign: 'right' }}>
                        <button 
                          onClick={() => deleteResource(item.id)} 
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                      No resources found. Start by uploading one above!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;