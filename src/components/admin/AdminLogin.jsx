import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const AdminLogin = ({ onLogin }) => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const secretKey = import.meta.env.VITE_ADMIN_KEY;

  const onSubmit = (data) => {
    const username = import.meta.env.VITE_ADMIN_LOGIN;
    const password = import.meta.env.VITE_ADMIN_PASSWORD;

    if (data.username === username && data.password === password) {
      setLoginError("");

      const encryptedCredentials = CryptoJS.AES.encrypt(
        JSON.stringify({ username, password }),
        secretKey
      ).toString();

      localStorage.setItem("adminCredentials", encryptedCredentials);
      onLogin();
      navigate("/admin");
    } else {
      setLoginError("Incorrect username or password.");
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-white font-Nunito border border-[#ccc] p-10 rounded-lg">
        <h1 className="gradient-main text-lg pb-8">Admin Panel</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-[265px] max-w-full"
        >
          <label htmlFor="username" className="gradient-main">
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Admin login is required" })}
            className="border border-[#ccc] bg-transparent rounded-md p-2 outline-none"
            placeholder="Login"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <label htmlFor="password" className="gradient-main">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Admin password is required",
            })}
            className="border border-[#ccc] bg-transparent rounded-md p-2 outline-none"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {loginError && <p className="text-red-500">{loginError}</p>}

          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLogin;
