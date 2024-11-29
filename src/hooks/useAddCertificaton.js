import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAddCertification } from "../services/apiAddCertification";

function useAddCertification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => apiAddCertification(data),
    onSuccess: (response) => {
      console.log("Certification added successfully:", response.insertedData);
      queryClient.invalidateQueries(["certification"]);
    },
    onError: (error) => {
      console.error(`Error adding certification: ${error.message}`);
    },
  });
}

export default useAddCertification;
