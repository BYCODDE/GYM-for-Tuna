import { supabase } from "./supabase";

export const apiGetBlogById = async (id) => {
  let { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
};
