import { NavLink } from "react-router-dom";
import navItems from "../../features/navItems";
function HeaderNav() {
  return (
    <div className="md:max-w-[450px]  xl:max-w-[700px]  md:flex hidden items-center justify-between w-full h-full  max-h-[68px] p-[20px] z-10 rounded-[200px] border border-[#4D4D4D] bg-[#222222]">
      <nav className="gap-[20px] w-full tiny:text-[14px] smaller:text-[20px] text-center flex  text-[#FFF]">
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
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default HeaderNav;
