import AdminPriceContainer from "../../components/services/AdminPricesContainer";
import AdminAddingPage from "../../components/admin/AdminAddingPage";
import { useState } from "react";

const AdminServices = () => {
  const [AddingOpen, setAddingOpen] = useState(false);

  return (
    <div className="lg:p-[82px]    text-[#FFF] font-Nunito p-[22px] ">
      <div className="flex items-center justify-between font-bold">
        <h3 className="text-[22px] md:hidden flex">Services</h3>
        <div className="md:block hidden">
          <h3 className="text-[22px]">Services</h3>
          <p className="text-[15px] font-normal">Add services you provide</p>
        </div>
        <button
          className="md:hidden block w-[30px] h-[30px] cursor-pointer text-black bg-[#D7FD44] rounded-[50%] font-bold text-[20px] "
          onClick={() => setAddingOpen(true)}
        >
          +
        </button>
        <button
          className="md:block hidden w-[195px] h-[42px] cursor-pointer text-[#D7FD44]  rounded-[24px] font-bold text-[15px] p-[10px] border border-[#D7FD44] "
          onClick={() => setAddingOpen(true)}
        >
          + Add Service
        </button>
      </div>

      <div className="flex flex-col justify-between items-center mt-[30px] ">
        <div className="w-full">
          <AdminPriceContainer />
        </div>
      </div>
      {AddingOpen && (
        <AdminAddingPage
          setAddingOpen={setAddingOpen}
          AddingOpen={AddingOpen}
        />
      )}
    </div>
  );
};

export default AdminServices;
