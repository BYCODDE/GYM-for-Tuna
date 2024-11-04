import { supabase } from "./supabase";

export const apiRemoveService = async (id) => {
  let { data, error,} = await supabase.from("prices").delete().eq("id",id);

  return { data, error };
};
