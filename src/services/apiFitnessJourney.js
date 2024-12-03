import { supabase } from "./supabase";

const fetchFitnessJourney = async () => {
  let { data: fitnessJourney, error } = await supabase
    .from("services")
    .select("*");

  return { fitnessJourney, error };
};

export default fetchFitnessJourney;
