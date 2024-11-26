import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteCertification } from "../services/apiDeleteCertification";

const useRemoveCertification = () => {
  const queryClient = useQueryClient();

  const removeCertificationMutation = useMutation({
    mutationFn: apiDeleteCertification,
    onSuccess: () => {
      queryClient.invalidateQueries(["certification"]);
      console.log("warmatebit waishala");
      
    },
    onError: (error) => {
      console.error("Error deleting service:", error);
    },
  });
  return {
    removeCertification: removeCertificationMutation.mutate,
    isRemoving: removeCertificationMutation.isLoading,
    removeError: removeCertificationMutation.error,
  };
};

export default useRemoveCertification;
