import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetchServices from "../services/apiServices";
import { apiRemoveService } from "../services/apiRemoveService";

const useGetServices = () => {
  const queryClient = useQueryClient();

  // Fetching services
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  // Mutation for removing a service
  const removeServiceMutation = useMutation({
    mutationFn: apiRemoveService,
    onSuccess: () => {
      // Invalidate and refetch the "services" query after successful deletion
      queryClient.invalidateQueries(["services"]);
    },
    onError: (error) => {
      console.error("Error deleting service:", error);
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
    removeService: removeServiceMutation.mutate, // Expose the remove function
    isRemoving: removeServiceMutation.isLoading, // Expose loading state for removal
    removeError: removeServiceMutation.error, // Expose error state for removal
  };
};

export default useGetServices;
