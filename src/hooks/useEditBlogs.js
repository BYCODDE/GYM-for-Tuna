import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiEditBlogs } from "../services/apiEditBlogs";

function useEditBlogs() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: ({ id, editedBlogs }) => apiEditBlogs(id, editedBlogs),
    onSuccess: () => {
      console.log("Blogs updated successfully!");
      queryClient.invalidateQueries(["blog"]); 
    },
    onError: (error) => {
      console.error("Error updating blogs:", error.message);
    },
  });

  return { mutate, isLoading, error, isSuccess };
}

export default useEditBlogs;
