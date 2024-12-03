import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddService } from "../services/apiAddService";

function useAddService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => apiAddService(data),
    onSuccess: (response) => {
      console.log("Service added successfully:", response.data);
      queryClient.invalidateQueries(["prices"]);
    },
    onError: (error) => {
      console.log(`Error adding service: ${error.message}`);
    },
  });
}

export default useAddService;
