import { motion } from "framer-motion";

function AdminAddingPage({ setAddingOpen, AddingOpen }) {
  const menuVariants = {
    open: {
      y: 0,
      transition: { type: "spring", stiffness: 30 },
    },
    closed: {
      y: "100%",
      transition: { type: "spring", stiffness: 30 },
    },
  };

  return (
    <div className="relative z-10 font-Nunito text-[#FFF] ">
      <motion.div
        className="fixed bottom-0 left-0 w-full h-full bg-[#121212] z-50 p-[24px] flex flex-col items-start"
        initial="closed"
        animate={AddingOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-between  w-full border-b border-[#6F6F6F] ">
          <div className="flex flex-col gap-[10px] mb-[10px]">
            <h1 className="text-[25px] font-bold">Services</h1>
            <h3 className="text-[15px] font-[500]">Add services you provide</h3>
          </div>
          <button onClick={() => setAddingOpen(false)}>
            <img
              src="/icons/adminRemove_svg.svg"
              alt="adminRemove_svg"
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </button>
        </div>

        <div className="text-white w-full text-center mt-[41px] gap-5">
          <div>
            <div className="flex items-center gap-[10px] ">
              <div className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></div>
              <span className="text-[18px] font-[500] font-[SFPro]">
                Input Service Title
              </span>
            </div>
            <input
              className="placeholder:text-[#FFF] placeholder:font-[SFPro]  w-full bg-[#323232] rounded-[10px]  p-[10px] mt-[12px]  focus:outline-none focus:border-none"
              type="text"
              placeholder="Private Personal Training"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminAddingPage;
