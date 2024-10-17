import useGetServices from "../../hooks/useGetServices";

const AdminServices = () => {
  const { data, isLoading, error } = useGetServices();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <div className="text-[#FFF] font-Nunito p-[22px]">
      <div className="flex items-center justify-between font-bold">
        <h3 className="text-[22px]">Services</h3>
        <button className="w-[30px] h-[30px] cursor-pointer text-black bg-[#D7FD44] rounded-[50%] ">
          +
        </button>
      </div>
      <div className="flex flex-col justify-between items-center ">
        {data.services.map((serv) => (
          <div
            key={serv.id}
            className="flex h-[70px] py-[8px] px-[16px] pl-[24px] bg-[#222] rounded-[20px] items-center gap-[10px] self-stretch uppercase mt-[20px]   justify-between "
          >
            {serv.name}
            <img src="\icons\service-arrow.svg" alt="service-arrow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
