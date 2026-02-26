import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vendors from "./pages/Vendors";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [vendors, setVendors] = useState([
    { id: 1, name: "ABC Trading", email: "abc@email.com", phone: "0911111111" },
    { id: 2, name: "Golden Supplier", email: "golden@email.com", phone: "0922222222" },
    { id: 3, name: "Myanmar Distribution", email: "md@email.com", phone: "0933333333" }
  ]);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
      />

      {isLoggedIn ? (
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Dashboard onLogout={() => setIsLoggedIn(false)} />}
          />
          <Route
            path="vendors"
            element={
              <Vendors
                vendors={vendors}
                setVendors={setVendors}
              />
            }
          />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;