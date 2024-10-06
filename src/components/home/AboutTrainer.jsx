import { Link } from "react-router-dom";

const AboutTrainer = () => {
  return (
    <section className="pb-10 px-[37px] pt-10">
      <h1 className="text-sm font-bold uppercase leading-normal gradient-main pb-4">
        ABOUT ME
      </h1>
      <div className="font-Nunito flex flex-col gap-4">
        <div className="about-trainer h-[212.581px] bg-center bg-cover max-w-[295px] rounded-[16px] self-stretch"></div>
        <div className="flex flex-col gap-4">
          <p className="text-primary-paragraph text-xs max-w-xs">
            Hi, I'm Tuna, a personal trainer dedicated to helping people
            transform through fitness. My journey began when I overcame my own
            struggles with body confidence and health. Now, I use my experience
            to empower others to achieve their fitness goals.
          </p>
          <Link to="/stories">
            <button
              type="button"
              className="bg-[#B8D44A] rounded-lg text-[#000] text-sm px-[38.5px] py-[8.5px] 
             hover:brightness-105 hover:bg-opacity-40 transition-all duration-500 ease-in-out"
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;
