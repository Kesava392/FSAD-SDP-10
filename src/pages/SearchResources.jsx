import { useState } from "react";

// 1. Destructure 'resources' from props
function SearchResources({ resources }) { 
  const [search, setSearch] = useState("");

  // 2. Filter the dynamic 'resources' prop instead of a local variable
  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Search Resources</h2>

      <input
        type="text"
        placeholder="Search resources by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginTop: "15px",
          marginBottom: "25px",
          borderRadius: "8px",
          border: "1px solid #ddd"
        }}
      />

      {/* 3. Render the filtered list */}
      <div className="resource-grid" style={{ display: "grid", gap: "20px" }}>
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.title}</h3>
              <p>Category: <strong>{item.category}</strong></p>
              <button>Download</button>
            </div>
          ))
        ) : (
          <p style={{ color: "#666" }}>No resources found matching "{search}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchResources;