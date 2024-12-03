import { useQuery } from "@tanstack/react-query";
import fetchFitnessJourney from "../services/apiFitnessJourney";

const useGetFitnessJourney = () => {
  return useQuery({
    queryKey: ["fitnessJourney"],
    queryFn: fetchFitnessJourney,
  });
};

export default useGetFitnessJourney;
