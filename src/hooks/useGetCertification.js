import { useQuery } from "@tanstack/react-query";
import fetchCertification from "../services/apiCertification";
function useGetCertification() {
  return useQuery({
    queryKey: ["certification"],
    queryFn: fetchCertification,
  });
}

export default useGetCertification;
