import { motion } from "framer-motion";

import { useState } from "react";
import useAddService from "../../hooks/useAddService";

function AdminAddingPage({ setAddingOpen, AddingOpen }) {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const { mutate: addInfo } = useAddService({
    name,
    description,
    image,
  });
  console.log(addInfo);

  const handleSubmit = () => {
    addInfo({
      name,
      description,
      image,
    });
    setAddingOpen(false);
  };

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
    <div className="relative z-10 font-Nunito text-[#FFF]">
      <motion.div
        className="fixed bottom-0 left-0 w-full h-[100vh] bg-[#121212] z-50 p-[24px] flex flex-col items-start overflow-y-auto"
        initial="closed"
        animate={AddingOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-between w-full border-b border-[#6F6F6F] mb-[10px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] font-bold">Services</h1>
            <h3 className="text-[15px] font-[500] mb-[10px]">
              Add services you provide
            </h3>
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
          <div className="flex flex-col gap-[50px]">
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                {" "}
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type name
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                {" "}
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type description
              </h3>
              <textarea
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                name=""
                id=""
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                {" "}
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Choose image
              </h3>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232] cursor-pointer"
              />
            </div>
          </div>
          <button
            onSubmit={() => handleSubmit()}
            className="text-[#D7FD44] h-[42px] border border-[#D7FD44] rounded-[24px]"
            // onClick={() => setName([...setName, {}])}
            type="submit"
          >
            + Add Service
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminAddingPage;
