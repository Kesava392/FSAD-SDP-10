import { useState } from "react";

function SearchResources({ resources }) { 
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Updated map to handle both short and long category names
  const getImagePath = (category) => {
    const map = {
      // Long Names
      "Computer Science": "cs",
      "AI & Machine Learning": "ai",
      "Cyber Security": "cyber",
      "Data Science & Analytics": "ds",
      "Software Engineering": "se",
      "Cloud Computing": "cloud",
      "Mathematics": "math",
      "Physics": "phys",
      "Biotechnology": "bio",
      "UI/UX Design": "ux",
      "Graphic Design": "gfx",
      "Game Development": "game",
      "Business Management": "biz",
      "Digital Marketing": "mkt",
      "Finance & Accounting": "fin",
      "English Literature": "eng",
      "Psychology": "psych",
      
      // Short Names (matching your App.jsx abbreviations)
      "CS": "cs",
      "AI": "ai",
      "Math": "math",
      "Data": "ds",
      "Cyber": "cyber",
      "SE": "se",
      "Cloud": "cloud",
      "Phys": "phys",
      "Bio": "bio",
      "UX": "ux",
      "Gfx": "gfx",
      "Game": "game",
      "Biz": "biz",
      "Mkt": "mkt",
      "Fin": "fin",
      "Eng": "eng",
      "Psych": "psych"
    };

    const result = map[category] || "search-bg";
    // This will help you debug: Open Inspect > Console to see what is happening
    console.log(`Category: ${category} -> Looking for: ${result}.jpg`);
    return result;
  };

  return (
    <div className="user-wrapper">
      <div className="user-header">
        <div>
          <h1 style={{ color: '#1e293b', fontWeight: 'bold' }}>Learner Dashboard</h1>
          <p style={{ color: '#475569' }}>Browse and download available library resources</p>
        </div>
      </div>

      <div className="search-container">
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
          filteredResources.map((item) => {
            const fileName = getImagePath(item.category);
            const imageSrc = `/${fileName}.jpg`;

            return (
              <div className="book-card" key={item.id} style={{ padding: '0', overflow: 'hidden' }}>
                {/* Image Preview */}
                <div style={{ width: '100%', height: '160px', background: '#f1f5f9' }}>
                  <img 
                    src={imageSrc} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { 
                      console.log(`Failed to load: ${imageSrc}`);
                      e.target.src = "/search-bg.jpg"; 
                    }} 
                  />
                </div>

                <div style={{ padding: '20px' }}>
                  <span className="badge">{item.category}</span>
                  <h3 style={{ marginTop: '10px', color: '#0f172a' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Ref: #{item.id}</p>
                  
                  <a 
                    href={imageSrc} 
                    download={`${item.title}.jpg`}
                    className="borrow-btn"
                    style={{ 
                      display: 'block', 
                      textAlign: 'center', 
                      textDecoration: 'none', 
                      marginTop: '15px',
                      cursor: 'pointer'
                    }}
                  >
                    Download Resource
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px' }}>
             <p style={{ color: "#1e293b" }}>No resources found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResources;