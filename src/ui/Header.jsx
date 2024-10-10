import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Experience from "../components/home/Experience";
import HeaderNav from "../components/HeaderNav/HeaderNav.jsx";
import navItems from "../features/navItems.js";

const Header = () => {
  const [burgerValue, setBurgerValue] = useState(false);
  const location = useLocation();

  const menuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <header
        className={`relative ${
          location.pathname !== "/"
            ? "bg-[#121212] h-full items-center"
            : "h-screen"
        } sm:max-h-[500px] bg-no-repeat bg-cover bg-center px-[37px] py-10 font-Nunito flex justify-between smaller:max-h-[300px] small:max-h-[400px] tiny:max-h-[200px]`}
      >
        {location.pathname === "/" && (
          <div className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center bg-header-girl filter blur-[1px] brightness-75"></div>
        )}
        <div className="flex z-10 gap-[16px]">
          <h1 className="md:text-[24px] tiny:text-[14px] text-[20px] font-bold gradient-header uppercase text-center font-BebasNeue z-10">
            TRANSFORM <br /> WITH TUNA
          </h1>
          <img
            className="md:block hidden mt-[15px] h-[50px]"
            src="/icons/gym-svg.svg"
            alt="gym-svg"
          />
        </div>

        <HeaderNav />

        <div className="md:hidden flex flex-col items-center z-10">
          <img
            className="w-full h-full cursor-pointer tiny:max-w-[30px] tiny:max-h-[30px] max-w-[40px] max-h-[40px]"
            src="/icons/burger.svg"
            alt="burger_menu"
            onClick={() => setBurgerValue(!burgerValue)}
          />

          <motion.div
            className="fixed top-0 right-0 w-[100%] h-full bg-[#222222] z-50 p-[20px] flex flex-col items-end"
            initial="closed"
            animate={burgerValue ? "open" : "closed"}
            variants={menuVariants}
          >
            <button
              className="text-white text-2xl mb-4"
              onClick={() => setBurgerValue(false)}
            >
              X
            </button>
            <nav className="gap-[20px] w-full tiny:text-[14px] smaller:text-[20px] text-center flex flex-col text-[#FFF]">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center justify-center h-[35px] rounded-[71px] ${
                      isActive
                        ? "bg-[#D7FD44] p-2 text-[#000000] font-bold"
                        : "p-0 font-[400]"
                    } gap-2 flex-1`
                  }
                  onClick={() => setBurgerValue(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        </div>
      </header>
      {location.pathname === "/" && <Experience />}
    </>
  );
};

export default Header;
