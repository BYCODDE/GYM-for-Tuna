import { supabase } from "./supabase";

const fetchServices = async () => {
  let { data: services, error } = await supabase.from("services").select("*");

  return { services, error };
};

export default fetchServices;
