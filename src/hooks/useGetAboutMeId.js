import { useQuery } from "@tanstack/react-query";
import apiGetAboutMeId from "../services/apiGetAboutMeId";

function useGetAboutMeId(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["certification", id],
    queryFn: () => apiGetAboutMeId(id),
    enabled: !!id,
  });

  console.log("id certification  data:", data);
  return { data, error, isLoading };
}

export default useGetAboutMeId;
