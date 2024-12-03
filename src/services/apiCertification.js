import { supabase } from "./supabase";

const fetchCertification = async () => {
  let { data: certification, error } = await supabase
    .from("certification")
    .select("*");
  return { certification, error };
};

export default fetchCertification