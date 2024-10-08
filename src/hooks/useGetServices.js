import { useQuery } from "@tanstack/react-query";
import fetchServices from "../services/apiServices";

const useGetServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
};

export default useGetServices;
