import { useQuery } from "@tanstack/react-query";
import { apiGetBlogsById } from "../services/apiGetBlogsById";

function useGetBlogsById(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => apiGetBlogsById(id),
    enabled: !!id,
  });

  console.log("Fetched blogs id:", data);
  return { data, error, isLoading };
}

export default useGetBlogsById;
