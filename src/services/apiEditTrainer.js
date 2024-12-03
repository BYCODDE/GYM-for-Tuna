import { supabase } from "./supabase";

export const apiEditTrainer = async (id, updatedTrainer) => {
  const { data: editAbout, error } = await supabase
    .from("about")
    .update(updatedTrainer)
    .eq("id", id);
  console.log(editAbout);
  if (error) throw new Error(error.message);
  return editAbout;
};
