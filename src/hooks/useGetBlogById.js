import { useQuery } from "@tanstack/react-query";
import { apiGetBlogById } from "../services/apiGetBlogsId";

function useGetServiceById(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => apiGetBlogById(id),
    enabled: !!id,
  });

  return { data, error, isLoading };
}

export default useGetServiceById;
