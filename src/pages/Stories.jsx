import SuccessCarousel from "../components/home/SuccessCarousel";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Certification from "../components/stories/Certification";
import StoriesAbout from "../components/stories/StoriesAbout";
import StoriesBanner from "../components/stories/StoriesBanner";

const Stories = () => {
  return (
    <section className="bg-primary-bg pb-10">
      <StoriesBanner />
      <StoriesAbout />
      <Certification />
      <SuccessCarousel />
      <ScrollToTopButton />
    </section>
  );
};

export default Stories;
