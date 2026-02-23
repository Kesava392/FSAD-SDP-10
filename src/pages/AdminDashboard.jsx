function AdminDashboard() {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "200px",
        background: "#2c3e50",
        color: "white",
        padding: "20px",
        minHeight: "100vh"
      }}>
        <h3>Admin Panel</h3>
        <p>Dashboard</p>
        <p>Upload Resource</p>
        <p>Manage Resources</p>
      </div>

      {/* Main Content */}
      <div style={{ padding: "20px", flex: 1 }}>
        <h2>Admin Dashboard</h2>
        <button>Upload Resource</button>

        <h3>Resources</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Structures.pdf</td>
              <td>CS</td>
              <td><button>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;