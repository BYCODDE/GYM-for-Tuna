import { supabase } from "./supabase";

export const apiGetAddService = async () => {
  let { data, error } = await supabase.from("services").select("*");

  return { data, error };
};
