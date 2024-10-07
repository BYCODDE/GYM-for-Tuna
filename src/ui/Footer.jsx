import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/aboutme", label: "About Me" },
  { path: "/stories", label: "Success Story" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];
const Footer = () => {
  return (
    <footer className="bg-[#242424] p-[40px] flex flex-col justify-center  font-Nunito text-[#C4C4C4]">
      <div className="flex items-center gap-4">
        <span className="tiny:text-[14px] smaller:text-[20px] font-bold gradient-header uppercase  font-BebasNeue">
          TRANSFORM <br /> WITH TUNA
        </span>
        <img src="/icons/gym-svg.svg" alt="gym-svg" />
      </div>
      <div className="mt-[50px]">
        <nav className="flex flex-col justify-center items-start  gap-2">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={`text-`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <span className="tiny:text-[10px] smaller:text-[13px] font-Nunito  font-normal mt-[50px]  text-center ">
        © 2024 Transform with Tuna. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
