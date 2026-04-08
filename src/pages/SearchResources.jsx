import { useState } from "react";

function SearchResources({ resources }) { 
  const [search, setSearch] = useState("");

  // --- 1. IMAGE MAPPING LOGIC ---
  const getCategoryImage = (category) => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("computer science") || cat.includes("os")) return "/cs.jpg";
    if (cat.includes("ai") || cat.includes("machine")) return "/ai.jpg";
    if (cat.includes("cyber")) return "/cyber.jpg";
    if (cat.includes("data science")) return "/data.jpg";
    if (cat.includes("software")) return "/se.jpg";
    if (cat.includes("cloud")) return "/cloud.jpg";
    if (cat.includes("math")) return "/math.jpg";
    if (cat.includes("physics")) return "/phys.jpg";
    if (cat.includes("biotech")) return "/bio.jpg";
    if (cat.includes("ui") || cat.includes("ux")) return "/ux.jpg";
    if (cat.includes("graphic")) return "/gfx.jpg";
    if (cat.includes("game")) return "/game.jpg";
    if (cat.includes("business")) return "/biz.jpg";
    if (cat.includes("marketing")) return "/mkt.jpg";
    if (cat.includes("finance") || cat.includes("accounting")) return "/fin.jpg";
    if (cat.includes("english") || cat.includes("literature")) return "/eng.jpg";
    if (cat.includes("psychology")) return "/psych.jpg";
    return "/cs.jpg"; // Default fallback
  };

  // --- 2. PDF DOWNLOAD LOGIC ---
  const getDownloadPath = (item) => {
    const cat = (item.category || "").toLowerCase();
    if (cat.includes("operating") || cat.includes("os")) return "/books/os_template.pdf";
    if (cat.includes("ai") || cat.includes("machine")) return "/books/ai_resource.pdf";
    if (cat.includes("java")) return "/books/java_template.pdf";
    if (cat.includes("cyber")) return "/books/cyber_resource.pdf";
    if (cat.includes("data science")) return "/books/data_resource.pdf";
    if (cat.includes("software")) return "/books/se_resource.pdf";
    if (cat.includes("cloud")) return "/books/cloud_resource.pdf";
    if (cat.includes("math")) return "/books/math_resource.pdf";
    if (cat.includes("physics")) return "/books/physics_resource.pdf";
    if (cat.includes("biotech")) return "/books/biotech_resource.pdf";
    if (cat.includes("ui") || cat.includes("ux")) return "/books/uiux_resource.pdf";
    if (cat.includes("graphic")) return "/books/graphic_resource.pdf";
    if (cat.includes("game")) return "/books/game_resource.pdf";
    if (cat.includes("business") || cat.includes("management")) return "/books/business_resource.pdf";
    if (cat.includes("marketing")) return "/books/marketing_resource.pdf";
    if (cat.includes("finance")) return "/books/finance_resource.pdf";
    if (cat.includes("english")) return "/books/english_resource.pdf";
    if (cat.includes("psychology")) return "/books/psychology_resource.pdf";
    return "/books/cs_resource.pdf"; 
  };

  const handleDownload = (item) => {
    const fileUrl = getDownloadPath(item);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", `${item.title.replace(/\s+/g, '_')}.pdf`); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
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
        <input
          type="text"
          placeholder="Search resources by title or category..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="book-grid">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <div className="book-card" key={item.id} style={{ 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}>
              
              {/* --- DYNAMIC IMAGE SECTION --- */}
              <div className="card-image-wrapper" style={{ height: '180px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={getCategoryImage(item.category)} 
                  alt={item.category} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <div style={{ padding: '20px', flexGrow: 1 }}>
                <span className="badge" style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {item.category || "General"}
                </span>
                <h3 style={{ marginTop: '12px', color: '#0f172a', fontSize: '1.25rem' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '6px' }}>
                  By <strong>{item.author || "System Admin"}</strong>
                </p>
              </div>
              
              <div style={{ padding: '0 20px 20px' }}>
                <button 
                  className="borrow-btn" 
                  onClick={() => handleDownload(item)}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}
                >
                  Download Resource
                </button>
              </div>
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