import { useQuery } from "@tanstack/react-query";
import fetchTrainer from "../services/apiGetTrainer";

const useGetTrainer = () => {
  return useQuery({
    queryKey: ["trainerData"],
    queryFn: fetchTrainer,
  });
};

export default useGetTrainer;
