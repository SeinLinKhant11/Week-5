function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p>Welcome to your admin system.</p>

      <button
        onClick={onLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#EF4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;