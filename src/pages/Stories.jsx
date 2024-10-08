import StoriesAbout from "../components/stories/StoriesAbout";
import StoriesBanner from "../components/stories/StoriesBanner";

const Stories = () => {
  return (
    <section className="bg-primary-bg">
      <StoriesBanner />
      <StoriesAbout />
    </section>
  );
};

export default Stories;
