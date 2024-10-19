import useGetServices from "../../hooks/useGetServices";
import ErorrDisplay from "../../components/erorr/ErorrDisplay";
import CertificationSkeleton from "../../components/skeletons/CertificationSkeleton";
import AdminPriceContainer from "../../components/services/AdminPricesContainer";
const AdminServices = () => {
  const { data, isLoading, error } = useGetServices();

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
        <button className="w-[30px] h-[30px] cursor-pointer text-black bg-[#D7FD44] rounded-[50%] font-bold text-[20px] ">
          +
        </button>
      </div>
      <div className="flex flex-col justify-between items-center mt-[30px] ">
        {data.services.map((serv) => (
          <div key={serv.id} className="w-full">
            <AdminPriceContainer
              name={serv.name}
              OnePrice={serv.sessions_single}
              TenPrice={serv.sessions_ten}
              fivePrice={serv.sessions_five}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
