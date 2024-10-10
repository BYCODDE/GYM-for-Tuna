import { useState, useEffect } from "react";
import AdminLogin from "../components/admin/AdminLogin";
import CryptoJS from "crypto-js";
const Admin = () => {
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
