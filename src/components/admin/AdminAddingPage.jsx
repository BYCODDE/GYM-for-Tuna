import { motion } from "framer-motion";
// import { title } from "framer-motion/client";

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

  const addingPageItems = [
    {
      title: "Input Service Title",
      placeholderText: "Private Personal Training",
    },
    {
      title: "Overview",
      placeholderText:
        "Unlock your fitness potential with our Private Personal Training sessions, designed specifically for individuals seeking tailored guidance and support. In a one-on-one environment, you'll receive personalized attention that focuses on your unique goals.",
    },
    {
      title: "Session Structure",
      placeholderText:
        "Length of Sessions: 30 minutes Frequency: 1x/week, 3x/week",
    },
    {
      title: "Goal Setting",
      placeholderText:
        "We begin with a comprehensive assessment to understand your current fitness level, lifestyle, and any specific challenges you may face. This helps us create a tailored plan that aligns with your aspirations.",
    },
    {
      title: "Price",
      placeholderText:
        "Single Session One-on-one training session (60 minutes)$80 5-Session Package5 one-on-one training sessions$375 ($75/session) 10-Session Package10 one-on-one training sessions$700 ($70/session)",
    },
  ];

  return (
    <div className="relative z-10 font-Nunito text-[#FFF]">
      <motion.div
        className="fixed bottom-0 left-0 w-full h-[90vh] bg-[#121212] z-50 p-[24px] flex flex-col items-start overflow-y-auto"
        initial="closed"
        animate={AddingOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-between w-full border-b border-[#6F6F6F] mb-[10px]">
          <div className="flex flex-col gap-[10px]">
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

        <div className="text-white w-full text-center mt-[41px] gap-[3.25rem] flex flex-col">
          <div>
            {addingPageItems.map((item) => (
              <>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></div>
                  <span className="text-[18px] font-[500]">{item.title}</span>
                </div>
                <textarea
                  className="placeholder:text-[#FFF] w-full bg-[#323232] rounded-[10px] p-[10px] mt-[12px] focus:outline-none"
                  placeholder={item.placeholderText}
                />
              </>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminAddingPage;
