import { useMutation} from "@tanstack/react-query";
import { apiAddService } from "../services/apiAddService";

function useAddService(data) {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => apiAddService(data),
    onSuccess: () => {
      console.log("warmatebit daemata");
      // queryClient.invalidateQueries(["services"]);
    },
    onError: (error) => {
      console.log(`ver daemata ${error.message}`);
    },
  });
}

export default useAddService;
