import { supabase } from "./supabase";

export const apiAddBlogs = async (data) => {
  const { data: insertedBlogs, error } = await supabase
    .from("blog")
    .insert(data);

  if (error) {
    console.error(`Error in blog API: ${error.message}`);
  } else {
    console.log(`blog added successfully:`, insertedBlogs);
  }

  return { error, insertedBlogs };
};
