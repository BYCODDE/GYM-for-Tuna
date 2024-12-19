import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddBlogs } from "../services/apiAddBlogs";

function useAddBlogs() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => apiAddBlogs(data),
    onSuccess: (response) => {
      console.log("blog added successfully:", response.insertedData);
      queryClient.invalidateQueries(["blog"]);
    },
    onError: (error) => {
      console.error(`Error adding blog: ${error.message}`);
    },
  });
}

export default useAddBlogs;
