import { supabase } from "./supabase";

export const apiAddCertification = async (data) => {
  const { data: insertedData, error } = await supabase
    .from("certification")
    .insert(data);

  if (error) {
    console.error(`Error in certification API: ${error.message}`);
  } else {
    console.log(`Certification added successfully:`, insertedData);
  }

  return { error, insertedData };
};
