import { supabase } from "./supabase";

export const apiGetBlogs = async () => {
  let { data: blogs, error } = await supabase.from("blog").select("*");
  return { blogs, error };
};
