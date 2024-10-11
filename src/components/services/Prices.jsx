import PricesContainer from "./PricesContainer";
import useGetServices from "../../hooks/useGetServices";
import PricesSkeleton from "../skeletons/PricesSkeleton";
import ErorrDisplay from "../erorr/ErorrDisplay";
const Prices = () => {
  const { data, isLoading, error } = useGetServices();

  if (isLoading) {
    return <PricesSkeleton />;
  }

  if (error) {
    return <ErorrDisplay error={error.message} />;
  }
  return (
    <div className="md:max-w-[1280px] md:mx-auto flex flex-col gap-4 py-10">
      <h1 className="text-sm font-bold uppercase leading-normal gradient-main pb-4 md:text-2xl px-[37px] 2xl:px-0">
        Prices
      </h1>
      {data.services.map((serv) => (
        <div key={serv.id} className="">
          <PricesContainer
            name={serv.name}
            OnePrice={serv.sessions_single}
            TenPrice={serv.sessions_ten}
            fivePrice={serv.sessions_five}
          />
        </div>
      ))}
    </div>
  );
};

export default Prices;
