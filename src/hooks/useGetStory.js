import { useQuery } from "@tanstack/react-query";
import apiSuccessStory from "../services/apiSuccessStory";

const useGetStory = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["storyData"],
    queryFn: apiSuccessStory,
  });
  return { data, isLoading, isError, error };
};

export default useGetStory;
