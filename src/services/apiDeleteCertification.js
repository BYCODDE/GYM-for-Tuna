import { supabase } from "./supabase";

export const apiDeleteCertification = async () => {
  let { error, data } = await supabase.from("certification").delete();
  return { error, data };
};
