import React from "react";
import AboutTrainer from "../components/home/AboutTrainer";
import SuccessCarousel from "../components/home/SuccessCarousel";

const Home = () => {
  return (
    <main className="bg-primary-bg">
      <AboutTrainer />
      <SuccessCarousel />
    </main>
  );
};

export default Home;
