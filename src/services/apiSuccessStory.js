import { supabase } from "./supabase";

const fetchSuccessStory = async () => {
  let { data: successStory, error } = await supabase
    .from("successStory")
    .select("*");
  return { successStory, error };
};

export default fetchSuccessStory;
