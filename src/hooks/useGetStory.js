import { useQuery } from "@tanstack/react-query";
import apiSuccessStory from "../services/apiSuccessStory";

const useGetStory = () => {
  return useQuery({
    queryKey: ["storyData"],
    queryFn: apiSuccessStory,
  });
};

export default useGetStory;
