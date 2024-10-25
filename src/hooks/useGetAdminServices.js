import { useQuery } from "@tanstack/react-query";
import { apiGetAddService } from "../services/apiGetAddService";

function useGetAdminServices() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: apiGetAddService, 
  });

  console.log(data, "hook is data");

  return { data, isLoading, isError, error };
}

export default useGetAdminServices;
