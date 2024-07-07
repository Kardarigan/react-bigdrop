import { Outlet } from "react-router-dom";
import { Navbar } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
