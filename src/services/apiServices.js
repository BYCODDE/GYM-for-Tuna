import { supabase } from "./supabase";

const fetchServices = async () => {
  let { data: services, error } = await supabase.from("prices").select("*");
  return { services, error };
};

export default fetchServices;
