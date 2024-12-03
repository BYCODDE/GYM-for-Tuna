import { Link } from "react-router-dom";
import useGetTrainer from "../../hooks/useGetTrainer";
import AboutTrainerSkeleton from "../skeletons/AboutTrainerSkeleton";
import ErorrDisplay from "../erorr/ErorrDisplay";
const AboutTrainer = () => {
  const { data, error, isLoading } = useGetTrainer();

  if (isLoading) {
    return <AboutTrainerSkeleton />;
  }

  if (error) {
    return <ErorrDisplay error={error.message} />;
  }

  return (
    <section className="pb-10 px-[37px] md:max-w-[1281px] md:mx-auto 2xl:px-0">
      <h1 className="text-sm font-bold uppercase leading-normal gradient-main pb-4 md:text-2xl 2xl:text-[32px]">
        ABOUT ME
      </h1>

      {data.aboutTrainer.map((data) => {
        return (
          <div
            className="font-Nunito flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-16"
            key={data.id}
          >
            <div
              className={`h-[212.581px] bg-cover max-w-[295px] rounded-[16px] md:max-w-[587px] md:h-[423px] lg:max-w-[630px] lg:w-full lg:h-[423px]`}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundPosition: `center -30px`,
              }}
            ></div>
            <div className="flex flex-col gap-4 lg:justify-between">
              <p className="text-primary-paragraph text-xs max-w-xs md:text-xl md:max-w-xl">
                {data.story}
              </p>
              <div className="xl:flex xl:justify-end">
                <Link to="/stories" className="w-fit">
                  <button
                    type="button"
                    className="bg-[#B8D44A] rounded-lg text-[#000] text-sm px-[38.5px] py-[8.5px]
                    hover:brightness-105 hover:bg-opacity-40 transition-all duration-500 ease-in-out md:text-base lg:px-[60px] lg:py-[10px]"
                  >
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AboutTrainer;
