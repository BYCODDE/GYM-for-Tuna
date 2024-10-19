import { motion } from "framer-motion";

function AdminAddingPage({ setAddingOpen, AddingOpen }) {
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
    <div className="relative z-10">
      <motion.div
        className="fixed top-0 right-0 w-full h-full bg-[#222222] z-50 p-[20px] flex flex-col items-start"
        initial="closed"
        animate={AddingOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <button
          className="text-white text-2xl mb-4"
          onClick={() => setAddingOpen(false)}
        >
          X
        </button>

        
        <div className="text-white w-full text-center">
          <h1 className="text-3xl font-bold mb-6">Gym Info</h1>
          <ul className="flex flex-col gap-6 text-xl">
            <li className="cursor-pointer hover:text-[#D7FD44]">
              Workout Routines
            </li>
            <li className="cursor-pointer hover:text-[#D7FD44]">Membership</li>
            <li className="cursor-pointer hover:text-[#D7FD44]">Trainers</li>
            <li className="cursor-pointer hover:text-[#D7FD44]">Schedule</li>
            <li className="cursor-pointer hover:text-[#D7FD44]">Contact Us</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminAddingPage;
