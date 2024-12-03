import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiEditService } from "../services/apiEditService";

 function useEditService() {
  const queryClient = useQueryClient()

  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: ({ id, updatedService }) => apiEditService(id, updatedService),
    onSuccess: () => {
      console.log("Service updated successfully!");
      queryClient.invalidateQueries(["prices"]);
    },
    onError: (error) => {
      console.error("Error updating service:", error.message);
    },
  });
  return { mutate, isLoading, error, isSuccess };
}

export default useEditService