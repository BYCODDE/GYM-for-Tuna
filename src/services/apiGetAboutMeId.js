import { supabase } from "./supabase";

export const apiGetAboutMeId = async (id) => {
  let { data, error } = await supabase
    .from("certification")
    .select("*")
    .eq("id", id)
    .single();

  console.log(data, "es aris im certificatis data");

  return { data, error };
};

export default apiGetAboutMeId;
