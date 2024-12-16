import { supabase } from "./supabase";

export const apiDeleteBlogs = async (blogsId) => {
  // Check that certificationId is passed correctly
  console.log(blogsId); // Log this to debug the value

  let { error, data } = await supabase.from("blog").delete().eq("id", blogsId); // Ensure you're matching the correct field (id)

  return { error, data };
};
