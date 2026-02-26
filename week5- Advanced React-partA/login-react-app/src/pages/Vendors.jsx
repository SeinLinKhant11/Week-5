import { useState } from "react";
import VendorCard from "../components/VendorCard";

function Vendors({ vendors, setVendors }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleDelete = (id) => {
    const updatedVendors = vendors.filter((vendor) => vendor.id !== id);
    setVendors(updatedVendors);
  };

  const handleAddVendor = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) return;

    const newVendor = {
      id: Date.now(),
      name,
      email,
      phone
    };

    setVendors([...vendors, newVendor]);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Vendor List</h1>

      <form onSubmit={handleAddVendor} style={{ marginBottom: "30px" }}>
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

        <button type="submit">Add Vendor</button>
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
          />
        ))}
      </div>
    </div>
  );
}

export default Vendors;