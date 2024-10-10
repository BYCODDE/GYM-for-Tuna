import FitnessJourney from "../components/home/FitnessJourney";
import Prices from "../components/services/Prices";

const Services = () => {
  return (
    <section className="bg-primary-bg">
      <FitnessJourney title={"my services"} />
      <Prices />
    </section>
  );
};

export default Services;
