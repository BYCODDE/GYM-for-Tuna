import { useState } from "react";
import AdminLogin from "../components/admin/AdminLogin";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <section>
      {isLoggedIn ? (
        <div>
          <h1 className="text-white">Welcome to the Admin Page</h1>
        </div>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </section>
  );
};

export default Admin;
