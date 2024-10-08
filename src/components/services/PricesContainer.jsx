import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const PricesContainer = () => {
  const [showPrices, setShowPrices] = useState(false);

  const handleShowPrices = () => {
    setShowPrices((value) => !value);
  };

  return (
    <div className="px-[37px]">
      <div
        className="flex items-center gap-2 justify-between bg-[#222] rounded-[147px] pr-4 pl-6 py-2 cursor-pointer"
        onClick={handleShowPrices}
      >
        <p className="text-[#C4C4C4] font-Nunito text-sm font-bold leading-normal uppercase">
          private personal training
        </p>
        <motion.img
          src="/icons/service-arrow.svg"
          alt="arrow"
          className="transition-transform"
          animate={{ rotate: showPrices ? 49 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <AnimatePresence>
        {showPrices && (
          <motion.div
            className="border border-[#D7FD44] rounded-[60px] mt-4 overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="px-7 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <li className="flex items-center gap-3 text-white font-Nunito text-sm">
                <RxCross2 className="text-[#D7FD44] font-bold text-[30px]" />
                <p>5 SESSIONS: 300$</p>
              </li>
              <li className="flex items-center gap-3 text-white font-Nunito text-sm">
                <RxCross2 className="text-[#D7FD44] font-bold text-[30px]" />
                <p>5 SESSIONS: 300$</p>
              </li>
              <li className="flex items-center gap-3 text-white font-Nunito text-sm">
                <RxCross2 className="text-[#D7FD44] font-bold text-[30px]" />
                <p>5 SESSIONS: 300$</p>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricesContainer;
