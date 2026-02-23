function SearchResources() {
  const resources = [
    { title: "Operating Systems.pdf", category: "CS" },
    { title: "Computer Networks.pdf", category: "CS" },
    { title: "Research Paper AI.pdf", category: "AI" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Resources</h2>

      <input
        type="text"
        placeholder="Search..."
        style={{ padding: "8px", width: "300px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {resources.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px"
          }}>
            <h4>{item.title}</h4>
            <p>Category: {item.category}</p>
            <button>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResources;