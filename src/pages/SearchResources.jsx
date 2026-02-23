import { useState } from "react";

function SearchResources() {
  const [search, setSearch] = useState("");

  const resources = [
    { title: "Operating Systems.pdf", category: "CS" },
    { title: "Computer Networks.pdf", category: "CS" },
    { title: "Research Paper AI.pdf", category: "AI" },
  ];

  const filteredResources = resources.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Search Resources</h2>

      <input
        type="text"
        placeholder="Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginTop: "15px",
          marginBottom: "25px",
        }}
      />

      {filteredResources.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          <button>Download</button>
        </div>
      ))}
    </div>
  );
}

export default SearchResources;