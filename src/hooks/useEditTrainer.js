import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiEditTrainer } from "../services/apiEditTrainer";

function useEditTrainer() {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: ({ id, updatedTrainer }) => apiEditTrainer(id, updatedTrainer),
    onSuccess: () => {
      console.log("Trainer updated successfully!");
      queryClient.invalidateQueries(["about"]);
    },
    onError: (error) => {
      console.error("Error updating Trainer:", error.message);
    },
  });
  return { mutate, isLoading, error, isSuccess };
}

export default useEditTrainer;
