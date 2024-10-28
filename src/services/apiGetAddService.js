import { supabase } from "./supabase";

export const apiGetAddService = async () => {
  let { data, error } = await supabase.from("prices").select("*");


  return { data, error };
};
