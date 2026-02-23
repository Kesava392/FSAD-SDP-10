function Home() {
  return (
    <div className="container">
      <h1 className="hero-title">
        Welcome to Web-Based Resource Library
      </h1>

      <p className="hero-subtitle">
        Search, upload and manage educational resources easily.
      </p>

      {/* Using the grid-layout class from your updated CSS */}
      <div className="grid-layout">
        <div className="card" style={{ width: "280px" }}>
          <h3>🔍 Search Resources</h3>
          <p>Find study materials quickly and efficiently.</p>
        </div>

        <div className="card">
  <div className="card-icon"></div>
  <h3>📚  Study Materials</h3>
  <p>Access notes, past papers, and textbooks organized by subject.</p>
</div>

        <div className="card" style={{ width: "280px" }}>
          <h3>⚡ Fast Access</h3>
          <p>Access categorized educational content instantly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;