function VendorCard({ vendor, onDelete, onEdit }) {
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

      <div style={{ marginTop: "8px" }}>
        <button
          onClick={() => onEdit(vendor)}
          style={{
            marginRight: "8px",
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(vendor.id)}
          style={{
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
    </div>
  );
}

export default VendorCard;