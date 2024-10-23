import { supabase } from "./supabase";

export const apiGetAddService = async () => {
  let { data, error } = await supabase.from("services").select("*");
  // console.log(services);

  return { data, error };
};
