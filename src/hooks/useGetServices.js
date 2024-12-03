import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import fetchServices from "../services/apiServices";
import { apiRemoveService } from "../services/apiRemoveService";

const useGetServices = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  const removeServiceMutation = useMutation({
    mutationFn: apiRemoveService,
    onSuccess: () => {
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
    removeService: removeServiceMutation.mutate,
    isRemoving: removeServiceMutation.isLoading,
    removeError: removeServiceMutation.error,
  };
};

export default useGetServices;
