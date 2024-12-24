import { supabase } from "./supabase";

export const apiEditBlogs = async (id, data) => {
  const { data: updatedBlog, error } = await supabase
    .from("blog")
    .update(data)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return updatedBlog;
};
