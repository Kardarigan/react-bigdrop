import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
