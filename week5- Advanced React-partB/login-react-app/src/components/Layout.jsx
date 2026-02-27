import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "220px",
            backgroundColor: "#1E293B",
            color: "white",
            minHeight: "100vh",
            padding: "20px"
          }}
        >
          <Link to="/" style={{ color: "white", display: "block", marginBottom: "10px" }}>
            Dashboard
          </Link>

          <Link to="/vendors" style={{ color: "white", display: "block" }}>
            Vendors
          </Link>
        </div>

        <div style={{ flex: 1, padding: "40px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;