import { useState, useEffect } from "react";
import AdminLogin from "../components/admin/AdminLogin";
import CryptoJS from "crypto-js";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";

const AdminLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const encryptedCredentials = localStorage.getItem("adminCredentials");
    if (encryptedCredentials) {
      const secretKey = import.meta.env.VITE_ADMIN_KEY;

      const bytes = CryptoJS.AES.decrypt(encryptedCredentials, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      const username = import.meta.env.VITE_ADMIN_LOGIN;
      const password = import.meta.env.VITE_ADMIN_PASSWORD;

      if (
        decryptedData.username === username &&
        decryptedData.password === password
      ) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <section className="bg-primary-bg">
      {isLoggedIn ? (
        <div className="w-full min-h-screen">
          <AdminHeader />

          <Outlet />
        </div>
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </section>
  );
};

export default AdminLayout;
