import React from "react";
import AboutTrainer from "../components/home/AboutTrainer";
import SuccessCarousel from "../components/home/SuccessCarousel";
import FitnessJourney from "../components/home/FitnessJourney";
import ContactForm from "../components/home/ContactForm";

const Home = () => {
  return (
    <main className="bg-primary-bg">
      <FitnessJourney />
      <AboutTrainer />
      <SuccessCarousel />
      <ContactForm />
    </main>
  );
};

export default Home;
