function Home() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
        Welcome to Web-Based Resource Library
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Search, upload and manage educational resources easily.
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap"
      }}>
        <div className="card" style={{ width: "250px" }}>
          <h3>🔍 Search Resources</h3>
          <p>Find study materials quickly and efficiently.</p>
        </div>

        <div className="card" style={{ width: "250px" }}>
          <h3>📂 Upload Files</h3>
          <p>Admin can upload and manage resources easily.</p>
        </div>

        <div className="card" style={{ width: "250px" }}>
          <h3>⚡ Fast Access</h3>
          <p>Access categorized educational content instantly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;