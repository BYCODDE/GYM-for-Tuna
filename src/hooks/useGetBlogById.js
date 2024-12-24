import { useQuery } from "@tanstack/react-query";
import { apiGetBlogById } from "../services/apiGetBlogsId";

function useGetBlogById(id) {
  const { data, error, isLoading,isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => apiGetBlogById(id),
    enabled: !!id,
  });

  return { data, error, isLoading, isError };
}

export default useGetBlogById;
