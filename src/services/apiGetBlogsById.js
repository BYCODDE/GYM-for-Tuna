import { supabase } from "./supabase";

export const apiGetBlogsById = async (id) => {
  let { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();

  console.log(data, "es is blogs id");

  return { data, error };
};
