import { useQuery } from "@tanstack/react-query";
import { apiGetBlogs } from "../services/apiGetBlogs";

function useGetBlogs() {
  return useQuery({
    queryKey: ["blog"],
    queryFn: apiGetBlogs,
  });
}
export default useGetBlogs;
