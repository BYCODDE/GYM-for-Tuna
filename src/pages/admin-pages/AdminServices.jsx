import useGetServices from "../../hooks/useGetServices";
import ErorrDisplay from "../../components/erorr/ErorrDisplay";
import CertificationSkeleton from "../../components/skeletons/CertificationSkeleton";
import AdminPriceContainer from "../../components/services/AdminPricesContainer";
import AdminAddingPage from "../../components/admin/AdminAddingPage";
import { useState } from "react";

const AdminServices = () => {
  const { isLoading, error } = useGetServices();
  const [AddingOpen, setAddingOpen] = useState(false);

  if (isLoading) {
    return <CertificationSkeleton />;
  }

  if (error) {
    return <ErorrDisplay error={error.message} />;
  }

  return (
    <div className="text-[#FFF] font-Nunito p-[22px] ">
      <div className="flex items-center justify-between font-bold">
        <h3 className="text-[22px]">Services</h3>
        <button
          className="w-[30px] h-[30px] cursor-pointer text-black bg-[#D7FD44] rounded-[50%] font-bold text-[20px] "
          onClick={() => setAddingOpen(true)}
        >
          +
        </button>
      </div>
      {/* *TODO: ეს გავასწრო! */}
      <div className="flex flex-col justify-between items-center mt-[30px] ">
        {/* {data.services.map((serv) => ( */}
        <div className="w-full">
          <AdminPriceContainer />
        </div>
        {/* ))} */}
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
