import { supabase } from "./supabase";

export const apiAddService = async (data) => {
  let { error } = await supabase.from("services").insert(data);
  return { error };
};
