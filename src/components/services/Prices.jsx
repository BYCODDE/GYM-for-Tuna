import PricesContainer from "./PricesContainer";
import useGetServices from "../../hooks/useGetServices";
const Prices = () => {
  const { data, isLoading, error } = useGetServices();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="md:max-w-[1280] md:mx-auto flex flex-col gap-4 py-5">
      {data.services.map((serv) => (
        <div key={serv.id} className="">
          <PricesContainer name={serv.name} />
        </div>
      ))}
    </div>
  );
};

export default Prices;
