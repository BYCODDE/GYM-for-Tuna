import { supabase } from "./supabase";

export const apiEditAboutMe = async (id, updatedAboutMe) => {
  const { data, error } = await supabase
    .from("certification")
    .update(updatedAboutMe)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
