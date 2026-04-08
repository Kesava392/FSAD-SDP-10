import { Link } from "react-router-dom";

function Home() {
  const categories = [
    { title: "Computer Science", icon: "💻", count: "45+ Resources" },
    { title: "AI & Machine Learning", icon: "🤖", count: "30+ Resources" },
    { title: "Mathematics", icon: "📊", count: "25+ Resources" },
    { title: "Business Management", icon: "💼", count: "20+ Resources" }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 className="hero-title">
          Welcome to Web-Based Resource Library
        </h1>
        <p className="hero-subtitle">
          Search, upload and manage educational resources easily.
        </p>
        <div style={{ marginTop: '30px' }}>
          <Link to="/search" className="borrow-btn" style={{ padding: '12px 30px', textDecoration: 'none' }}>
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid-layout">
        <div className="card" style={{ width: "280px" }}>
          <h3>🔍 Search Resources</h3>
          <p>Find study materials quickly and efficiently.</p>
        </div>

        <div className="card" style={{ width: "280px" }}>
          <h3>📚 Study Materials</h3>
          <p>Access notes, past papers, and textbooks organized by subject.</p>
        </div>

        <div className="card" style={{ width: "280px" }}>
          <h3>⚡ Fast Access</h3>
          <p>Access categorized educational content instantly.</p>
        </div>
      </div>

      <hr style={{ margin: '60px 0', border: '0', borderTop: '1px solid #e2e8f0' }} />

      {/* FIXED: Browse by Category Section (Single Row) */}
      <section className="categories-preview">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: '#bcc4d1', fontSize: '1.8rem' }}>Browse by Subject</h2>
          <p style={{ color: '#ffffff' }}>Quick access to our top departments</p>
        </div>

        {/* This container ensures they stay in a single row on desktop */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'stretch',
          gap: '20px',
          flexWrap: 'wrap', // This allows it to wrap only if the screen gets too small (mobile)
          paddingBottom: '60px'
        }}>
          {categories.map((cat) => (
            <div key={cat.title} className="card cat-card" style={{ 
              flex: '1', // Makes cards equal width
              minWidth: '220px', // Prevents them from getting too squashed
              maxWidth: '280px',
              textAlign: 'center', 
              padding: '30px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{cat.icon}</div>
              <h3 style={{ marginBottom: '5px', fontSize: '1.2rem' }}>{cat.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{cat.count}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;