import { supabase } from "./supabase";

export const apiDeleteCertification = async (certificationId) => {
  // Check that certificationId is passed correctly
  console.log(certificationId); // Log this to debug the value

  let { error, data } = await supabase
    .from("certification")
    .delete()
    .eq("id", certificationId); // Ensure you're matching the correct field (id)

  return { error, data };
};
