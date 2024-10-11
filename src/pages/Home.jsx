import AboutTrainer from "../components/home/AboutTrainer";
import SuccessCarousel from "../components/home/SuccessCarousel";
import FitnessJourney from "../components/home/FitnessJourney";
import ContactForm from "../components/home/ContactForm";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

const Home = () => {
  return (
    <main className="bg-primary-bg">
      <FitnessJourney title={"Your Fitness Journey Starts Here"} />
      <AboutTrainer />
      <SuccessCarousel />
      <ContactForm />
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
