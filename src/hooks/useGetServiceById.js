import { useQuery } from "@tanstack/react-query";

import { apiGetServiceById } from "../services/apiGetServiceById";

function useGetServiceById() {
  const { data, error } = useQuery({
    queryKey: ["prices"],
    queryFn: apiGetServiceById,
  });

  console.log("modis eg erti data", data);
  return { data, error };
}

export default useGetServiceById;
