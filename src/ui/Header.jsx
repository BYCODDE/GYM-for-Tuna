
const Header = () => {
  return (
    <header className="bg-primary-bg px-[37px] py-10 font-Nunito flex justify-between items-center">
      <div>
        <h1 className="tiny:text-[14px] smaller:text-[20px] font-bold gradient-header uppercase text-center">
          TRANSFORM <br /> WITH TUNA
        </h1>
      </div>
      <div>
        <img className="w-full h-full  cursor-pointer tiny:max-w-[30px] tiny:max-h-[30px]  smaller:max-w-[40px] smaller:max-h-[40px]"
          src="\icons\burger.svg"
          alt="burger_menu"
        />

      </div>
    </header>
  );
};

export default Header;
