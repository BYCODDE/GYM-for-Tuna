import FitnessJourney from "../components/home/FitnessJourney";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Prices from "../components/services/Prices";

const Services = () => {
  return (
    <section className="bg-primary-bg">
      <FitnessJourney title={"my services"} />
      <Prices />
      <ScrollToTopButton />
    </section>
  );
};

export default Services;
