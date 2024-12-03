import { useQuery } from "@tanstack/react-query";
import { apiGetServiceById } from "../services/apiGetServiceById";

function useGetServiceById(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["prices", id],
    queryFn: () => apiGetServiceById(id),
    enabled: !!id, 
  });

  console.log("Fetched data:", data);
  return { data, error, isLoading };
}

export default useGetServiceById;
