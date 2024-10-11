import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="md:max-w-[1140px] lg:mx-auto">
      <div className="flex justify-between items-center py-[22px] px-[22px]">
        <Link to="/admin/dashboard">
          <img src="/admin/logo.svg" alt="logo" className="max-w-[78px]" />
        </Link>
        <div className="flex items-center gap-[18px]">
          <img
            src="/admin/search.svg"
            alt="search"
            className="max-w-6 h-6 cursor-pointer"
          />
          <img
            src="/admin/notifs.svg"
            alt="search"
            className="max-w-6 h-6 cursor-pointer"
          />
          <img
            src="/admin/profile.svg"
            alt="search"
            className="max-w-9 h-9 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
