import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useGetServices from "../../hooks/useGetServices";

const AdminPricesContainer = ({
  setAddingOpenEditPage,
  AddingOpenEditPage,
  EditPageId,
  setEditPageId,
}) => {
  const [visibleServices, setVisibleServices] = useState({});
  const {
    data,
    isLoading,
    isError,
    error,
    removeService,
    isRemoving,
    removeError,
  } = useGetServices();

  const handleDeleteService = (id) => {
    removeService(id);
  };
  console.log(data);

  const toggleShowPrices = (id) => {
    setVisibleServices((prevVisibleServices) => ({
      ...prevVisibleServices,
      [id]: !prevVisibleServices[id],
    }));
  };

  const handleEditId = (serviceId) => {
    setEditPageId(serviceId);
  };

  console.log(EditPageId);
  

  if (isLoading) return <div className="text-red-600">Loading...</div>;
  if (isError)
    return (
      <div className="text-red-600">
        Error loading services: {error.message}
      </div>
    );

  const servicesData = data?.services || [];

  return (
    <>
      {servicesData.map((service) => (
        <motion.div
          key={service.id}
          className="flex flex-col w-full bg-[#222] rounded-[20px] mt-[20px] overflow-hidden cursor-pointer font-Nunito"
          animate={{ height: visibleServices[service.id] ? "auto" : "70px" }}
          transition={{ duration: 0.3 }}
          onClick={() => toggleShowPrices(service.id)}
        >
          <div className="flex h-[70px] py-[8px] px-[16px] items-center gap-[10px] justify-between w-full">
            <p className="text-[#C4C4C4] font-Nunito text-sm font-bold leading-normal uppercase">
              {service.name}
            </p>
            <motion.img
              src="/icons/service-arrow.svg"
              alt="arrow"
              className="transition-transform"
              animate={{ rotate: visibleServices[service.id] ? -79 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence>
            {visibleServices[service.id] && (
              <motion.div
                className="flex flex-col gap-[10px] mt-4 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center gap-[10px] justify-between">
                    {/* <div className="flex items-center gap-[10px]"></div> */}
                    <div className="flex gap-[10px] items-center">
                      <motion.img
                        src="/icons/adminTrashcan_svg.svg"
                        alt="delete"
                        className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteService(service.id);
                        }}
                      />
                      <motion.img
                        src="/icons/adminEdit_svg.svg"
                        alt="edit"
                        className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          setAddingOpenEditPage(!AddingOpenEditPage);
                          handleEditId(service.id);
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-[#ABABAB] text-[14px] flex items-baseline gap-[10px]">
                    <div className="tiny:w-[18px] smaller:w-[13px]  w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold mt-[6px]"></div>
                    <div>
                      <span className="font-bold text-[20px] block">Price</span>
                      <ul className="flex flex-col gap-3">
                        <li>
                          Single Session One-on-one training session (60
                          minutes){" "}
                          <span className="ml-[5px] font-bold">
                            {service.sessions_single}$
                          </span>
                        </li>
                        <li>
                          5-Session Package 5 one-on-one training sessions
                          <span className="ml-[5px] font-bold">
                            {service.sessions_five}$
                          </span>
                          <span className="ml-[5px] font-bold">{`(${service.sessions_single}$ / session)`}</span>
                        </li>
                        <li>
                          10-Session Package 10 one-on-one training sessions
                          <span className="ml-[5px] font-bold">
                            {service.sessions_ten}$
                          </span>
                          <span className="ml-[5px] font-bold">{`(${service.sessions_single}$ / session)`}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      {isRemoving && <p className="text-yellow-600">Removing service...</p>}
      {removeError && (
        <p className="text-red-600">
          Error removing service: {removeError.message}
        </p>
      )}
    </>
  );
};

export default AdminPricesContainer;
