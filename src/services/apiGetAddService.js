import { supabase } from "./supabase";

export const GetAddService = async () => {
  let { data: services, error } = await supabase.from("services").select("*");
  return { services, error };
};
