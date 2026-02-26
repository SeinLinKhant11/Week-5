function VendorCard({ vendor, onDelete }) {
  return (
    <div
      style={{
        padding: "15px 0",
        borderBottom: "1px solid #E2E8F0"
      }}
    >
      <h3 style={{ marginBottom: "5px" }}>{vendor.name}</h3>
      <p style={{ margin: "0" }}>{vendor.email}</p>
      <p style={{ margin: "0" }}>{vendor.phone}</p>

      <button
        onClick={() => onDelete(vendor.id)}
        style={{
          marginTop: "8px",
          backgroundColor: "#EF4444",
          color: "white",
          border: "none",
          padding: "6px 10px",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default VendorCard;