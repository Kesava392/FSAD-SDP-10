import { useState } from "react";

function SearchResources({ resources }) { 
  const [search, setSearch] = useState("");

  // Filter logic remains the same, but we apply it to our new grid
  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-wrapper">
      <div className="user-header">
        <div>
          <h1 style={{ color: '#1e293b' }}>Learner Dashboard</h1>
          <p style={{ color: '#64748b' }}>Browse and download available library resources</p>
        </div>
      </div>

      <div className="search-container">
        {/* The search-input class from our CSS handles the rounded look */}
        <input
          type="text"
          placeholder="Search resources by title..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="book-grid">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <div className="book-card" key={item.id}>
              <div>
                <span className="badge">{item.category}</span>
                <h3 style={{ marginTop: '15px', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '5px' }}>
                  Reference ID: #{item.id}
                </p>
              </div>
              
              {/* Using your existing button style but inside the card */}
              <button className="borrow-btn">
                Download Resource
              </button>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px' }}>
            <p style={{ color: "#64748b", fontSize: '1.2rem' }}>
              No resources found matching "<strong>{search}</strong>"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResources;