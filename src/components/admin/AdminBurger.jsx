import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import adminnavItemsList from "../../features/adminnavItems";

function AdminBurger() {
  const [burgerValue, setBurgerValue] = useState(false);
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
    <div className="md:hidden flex flex-col items-center z-10">
      <img
        className="w-full h-full cursor-pointer tiny:max-w-[30px] tiny:max-h-[30px] max-w-[30px] max-h-[30px]"
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
          {adminnavItemsList.map((item) => (
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
  );
}

export default AdminBurger;
