// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import useGetServices from "../../hooks/useGetServices";
// import useGetAdminServices from "../../hooks/useGetAdminServices";
import useGetServices from "../../hooks/useGetServices";

const AdminPricesContainer = () => {
  // const [visibleServices, setVisibleServices] = useState({});

  const { data, isLoading, isError, error } = useGetServices();

  console.log(data,"componentshi data");

  // const toggleShowPrices = (id) => {
  //   setVisibleServices((prevVisibleServices) => ({
  //     ...prevVisibleServices,
  //     [id]: !prevVisibleServices[id],
  //   }));
  // };

  // const { data, error, isLoading } = useGetServices();
  // console.log(data);

  // if (isLoading) return <div className="text-red-600">Loading...</div>;
  // if (error) return <div className="text-red-600">Error loading services</div>;

  return (
    <>
      {/* {data.map((info) => (
        <motion.div
          key={info.id}
          className="flex flex-col w-full bg-[#222] rounded-[20px] mt-[20px] overflow-hidden cursor-pointer font-Nunito"
          animate={{ height: visibleServices[info.id] ? "auto" : "70px" }}
          transition={{ duration: 0.3 }}
          onClick={() => toggleShowPrices(info.id)}
        >
          <div className="flex h-[70px] py-[8px] px-[16px] items-center gap-[10px] justify-between w-full">
            <p className="text-[#C4C4C4] font-Nunito text-sm font-bold leading-normal uppercase">
              {info.name}
            </p>
            <motion.img
              src="/icons/service-arrow.svg"
              alt="arrow"
              className="transition-transform"
              animate={{ rotate: visibleServices[info.id] ? -79 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence>
            {visibleServices[info.id] && (
              <motion.div
                className="flex flex-col gap-[10px] mt-4 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center gap-[10px] justify-between">
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></div>
                      <span className="font-bold text-[20px]">Price</span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <motion.img
                        src="/icons/adminTrashcan_svg.svg"
                        alt="edit_svg"
                        className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                      />
                      <motion.img
                        src="/icons/adminEdit_svg.svg"
                        alt="edit_svg"
                        className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>

                  <div className="text-[#ABABAB] text-[14px]">
                    <ul className="flex flex-col gap-3">
                      <li>{info.description}</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))} */}
    </>
  );
};

export default AdminPricesContainer;
