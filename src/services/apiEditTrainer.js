import { supabase } from "./supabase";

export const apiEditTrainer = async (updatedTrainer) => {
  const { data, error } = await supabase.from("about").update(updatedTrainer);

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error(error.message);
  }

  console.log("Data returned from Supabase:", data);
  return data;
};
