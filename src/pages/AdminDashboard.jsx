import { useState } from "react";

function AdminDashboard({ resources, addResource, deleteResource }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("CS");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Please enter a title");
    addResource({ title, category });
    setTitle(""); 
  };

  return (
    <div className="admin-wrapper">
      {/* The sidebar has been removed entirely. 
        The 'admin-wrapper' in your CSS now handles the full-screen 'server-bg.jpg' 
      */}

      <main className="admin-content">
        <header className="content-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e293b', fontWeight: '800' }}>
            Management Dashboard
          </h2>
          <p style={{ color: '#496387', fontSize: '1.1rem' }}>
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
              placeholder="Resource Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="admin-input"
              style={{ flex: '2', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
            />
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="admin-select"
              style={{ flex: '1', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
            >
              <option value="CS">Computer Science</option>
<option value="AI">AI & Machine Learning</option>
<option value="Cyber">Cyber Security</option>
<option value="Data">Data Science & Analytics</option>
<option value="SE">Software Engineering</option>
<option value="Cloud">Cloud Computing</option>

<option value="Math">Mathematics</option>
<option value="Phys">Physics</option>
<option value="Bio">Biotechnology</option>

<option value="UX">UI/UX Design</option>
<option value="Gfx">Graphic Design</option>
<option value="Game">Game Development</option>

<option value="Biz">Business Management</option>
<option value="Mkt">Digital Marketing</option>
<option value="Fin">Finance & Accounting</option>

<option value="Eng">English Literature</option>
<option value="Psych">Psychology</option>
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
                  <th>Category</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {resources.length > 0 ? (
                  resources.map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontWeight: '500' }}>{item.title}</td>
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
                    <td colSpan="3" style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
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