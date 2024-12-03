import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteCertification } from "../services/apiDeleteCertification";

const useRemoveCertification = () => {
  const queryClient = useQueryClient();

  const removeCertificationMutation = useMutation({
    mutationFn: apiDeleteCertification,
    onSuccess: () => {
      queryClient.invalidateQueries(["certification"]); // Invalidate cache to refetch updated data
      console.log("Certification successfully deleted!");
    },
    onError: (error) => {
      console.error("Error deleting certification:", error);
    },
  });

  return {
    removeCertification: removeCertificationMutation.mutate, // Call this with certificationId
    isRemoving: removeCertificationMutation.isLoading,
    removeError: removeCertificationMutation.error,
  };
};

export default useRemoveCertification;
