import { NavLink } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";
const navItems = [
  { path: "/", label: "HOME" },
  { path: "/stories", label: "STORIES" },
  { path: "/services", label: "SERVICES" },
  { path: "/contact", label: "CONTACT" },
];
const Header = () => {
  const { burgerValue, setBurgerValue } = useContext(MyContext);
  return (
    <header className="bg-primary-bg px-[37px] py-10 font-Nunito flex justify-between ">
      <h1 className="tiny:text-[14px] smaller:text-[20px] font-bold gradient-header uppercase text-center">
        TRANSFORM <br /> WITH TUNA
      </h1>

      <div className="flex flex-col items-center">
        <img
          className="w-full h-full cursor-pointer tiny:max-w-[30px] tiny:max-h-[30px] smaller:max-w-[40px] smaller:max-h-[40px]"
          src="\icons\burger.svg"
          alt="burger_menu"
          onClick={() => setBurgerValue(!burgerValue)}
        />
        {burgerValue && (
          <>
            <div className="mt-[10px]  w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-[#222222] mx-auto"></div>

            <div className="flex w-full h-full py-[20px] px-[10px] justify-between items-center border-t border-[#4D4D4D] bg-[#222222] mt-[5px]">
              <nav className="text-center flex flex-col text-[#FFF] text-[20px]">
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
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
