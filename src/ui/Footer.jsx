import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/stories", label: "Success Story" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];
const Footer = () => {
  return (
    <footer className="xl:justify-around md:gap-[50px]  md:justify-between md:flex-row bg-[#242424] p-[40px] flex flex-col justify-center  font-Nunito text-[#C4C4C4] h-full">
      <div className="md:mt-[50px] flex items-center gap-4">
        <div className="flex flex-col  md:text-[24px] tiny:text-[14px] text-[20px] font-bold gradient-header uppercase text-center font-BebasNeue ">
          <span>TRANSFORM</span> <span>WITH TUNA</span>
        </div>
        <img className="" src="/icons/gym-svg.svg" alt="gym-svg" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-center mt-[50px]">
        <nav className="xl:text-[20px] xl:gap-[41px] md:gap-[22px] md:flex-row tiny:text-[12px] smaller:text-[14px] flex flex-col justify-center items-start  gap-2">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={`text-`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <span className=" xl:block  xl:text-[20px] tiny:text-[10px] smaller:text-[12px] font-Nunito  font-normal mt-[50px]  text-center hidden ">
          © 2024 Transform with Tuna. All rights reserved.
        </span>
      </div>
      <span className="md:hidden tiny:text-[10px] smaller:text-[12px] font-Nunito  font-normal mt-[50px]  text-center ">
        © 2024 Transform with Tuna. All rights reserved.
      </span>
      <div className="xl:mt-[50px] xl:flex-row mt-[10px] md:flex gap-4  flex-col hidden ">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="cursor-pointer"
            src="/icons/facebook.svg"
            alt="facebook"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cursor-pointer" src="/icons/insta.svg" alt="insta" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img
            className="cursor-pointer"
            src="/icons/tiktok.svg"
            alt="tiktok"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="cursor-pointer" src="/icons/x.svg" alt="x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
