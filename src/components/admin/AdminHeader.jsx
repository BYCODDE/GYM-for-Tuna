import { Link } from "react-router-dom";
import AdminBurger from "./AdminBurger";
import AdminHeaderNav from "./AdminHeaderNav";

const AdminHeader = () => {
  return (
    <header className=" lg:mx-auto  ">
      <div className="flex justify-between items-center py-[22px] px-[22px]">
        <Link to="/admin/dashboard">
          <img
            src="/admin/logo.svg"
            alt="logo"
            className="lg:max-w-[150px] md:max-w-[100px]  max-w-[78px]"
          />
        </Link>
        <div className="flex items-center gap-[18px]">
          <AdminBurger />
          <img
            src="/admin/notifs.svg"
            alt="search"
            className=" lg:h-[40px] lg:max-w-[40px] md:max-w-[30px] md:h-[30px] max-w-6 h-6 cursor-pointer"
          />
          <img
            src="/admin/profile.svg"
            alt="search"
            className="lg:h-[40px] lg:max-w-[40px] md:max-w-[30px] md:h-[30px] max-w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <AdminHeaderNav />
      </div>
    </header>
  );
};

export default AdminHeader;
