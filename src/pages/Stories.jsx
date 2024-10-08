import SuccessCarousel from "../components/home/SuccessCarousel";
import StoriesAbout from "../components/stories/StoriesAbout";
import StoriesBanner from "../components/stories/StoriesBanner";

const Stories = () => {
  return (
    <section className="bg-primary-bg pb-10">
      <StoriesBanner />
      <StoriesAbout />
      <SuccessCarousel />
    </section>
  );
};

export default Stories;
