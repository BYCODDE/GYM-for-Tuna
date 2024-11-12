import { supabase } from "./supabase";

export const apiEditService = async (id, updatedService) => {
  const { data, error } = await supabase
    .from("prices")
    .update(updatedService)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
