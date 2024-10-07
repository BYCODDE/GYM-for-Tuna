import { supabase } from "./supabase";

const fetchTrainer = async () => {
  let { data: aboutTrainer, error } = await supabase.from("about").select("*");

  return { aboutTrainer, error };
};

export default fetchTrainer;
