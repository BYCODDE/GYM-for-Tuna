import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiEditAboutMe } from "../services/apiEditAboutMe";

function useEditAboutMe() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: ({ id, updatedAboutMe }) => apiEditAboutMe(id, updatedAboutMe),
    onSuccess: () => {
      console.log("certification updated successfully!");
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.error("Error updating certification:", error.message);
    },
  });
  return { mutate, isLoading, error, isSuccess };
}

export default useEditAboutMe;
