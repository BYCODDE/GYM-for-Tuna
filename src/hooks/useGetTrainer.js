
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTrainerData = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/about`,
    {
      headers: {
        apikey: import.meta.env.VITE_SUPABASE_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

const useGetTrainer = () => {
  return useQuery({
    queryKey: ["trainerData"],
    queryFn: fetchTrainerData,
  });
};

export default useGetTrainer;
