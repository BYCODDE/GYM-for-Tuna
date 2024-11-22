import { supabase } from "./supabase";

export const apiAddCertification = async (data) => {
  let { error } = await supabase.from("certification").insert(data);
  return { error, data };
};
