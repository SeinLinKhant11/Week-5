import { useState } from "react";
import VendorCard from "../components/VendorCard";

function Vendors({ vendors, setVendors }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editVendorId, setEditVendorId] = useState(null);

  const handleEdit = (vendor) => {
    setName(vendor.name);
    setEmail(vendor.email);
    setPhone(vendor.phone);
    setEditVendorId(vendor.id);
  };

  const handleDelete = (id) => {
    const updatedVendors = vendors.filter((vendor) => vendor.id !== id);
    setVendors(updatedVendors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) return;

    if (editVendorId) {
      const updatedVendors = vendors.map((vendor) =>
        vendor.id === editVendorId
          ? { ...vendor, name, email, phone }
          : vendor
      );

      setVendors(updatedVendors);
      setEditVendorId(null);
    } else {
      const newVendor = {
        id: Date.now(),
        name,
        email,
        phone
      };

      setVendors([...vendors, newVendor]);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Vendor List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Vendor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: "10px" }}
        />

        <button type="submit">
          {editVendorId ? "Update Vendor" : "Add Vendor"}
        </button>
      </form>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}
      >
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Vendors;