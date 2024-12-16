import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteBlogs } from "../services/apiDeleteBlogs";


const useRemoveBlogs = () => {
  const queryClient = useQueryClient();

  const removeBlogMutation = useMutation({
    mutationFn: apiDeleteBlogs,
    onSuccess: () => {
      queryClient.invalidateQueries(["blog"]);
      console.log("blog successfully deleted!");
    },
    onError: (error) => {
      console.error("Error deleting blog:", error);
    },
  });

  return {
    removeBlog: removeBlogMutation.mutate,
    isRemoving: removeBlogMutation.isLoading,
    removeError: removeBlogMutation.error,
  };
};

export default useRemoveBlogs;
