import { supabase } from "./supabase";

export const apiAddService = async (data) => {
  let { error } = await supabase.from("prices").insert(data);
  return { error, data };
};
