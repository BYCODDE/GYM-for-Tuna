import { NavLink } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/stories", label: "STORIES" },
  { path: "/services", label: "SERVICES" },
  { path: "/contact", label: "CONTACT" },
];

const Header = () => {
  const { burgerValue, setBurgerValue } = useContext(MyContext);

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
    <header className="bg-no-repeat bg-cover bg-center bg-header-girl px-[37px] py-10 font-Nunito flex justify-between h-screen max-h-[375px]">
      <h1 className="md:text-[30px] tiny:text-[14px] text-[20px] font-bold gradient-header uppercase text-center font-BebasNeue">
        TRANSFORM <br /> WITH TUNA
      </h1>

      <div className="flex flex-col items-center">
        <img
          className="w-full h-full cursor-pointer tiny:max-w-[30px] tiny:max-h-[30px] max-w-[40px] max-h-[40px]"
          src="/icons/burger.svg"
          alt="burger_menu"
          onClick={() => setBurgerValue(!burgerValue)}
        />

        <motion.div
          className="fixed top-0 right-0 w-[100%] h-full bg-[#222222] z-50 p-[20px] flex flex-col items-center"
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
                  `flex items-center justify-center h-[35px] rounded-[71px]
                ${
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
  );
};

export default Header;
