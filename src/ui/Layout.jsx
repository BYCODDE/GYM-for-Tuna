import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="2xl:bg-primary-bg">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
