import useGetTrainer from "../../hooks/useGetTrainer";
import ArrowsRight from "../../ui/ArrowsRight";
import ErorrDisplay from "../erorr/ErorrDisplay";
import StoryAboutSkeleton from "../skeletons/StoryAboutSkeleton";

const StoriesAbout = () => {
  const { data, isLoading, error } = useGetTrainer();
  const lastData = data?.aboutTrainer[data?.aboutTrainer.length - 1];

  if (isLoading) {
    return <StoryAboutSkeleton />;
  }

  if (error) {
    return <ErorrDisplay error={error.message} />;
  }

  return (
    <section className="flex flex-col md:max-w-[1280px] md:mx-auto">
      <div className="px-[37px] 2xl:px-0">
        <div className="flex items-center gap-4 pb-6">
          <ArrowsRight />
          <h1 className="gradient-main font-Nunito text-sm uppercase font-bold md:text-[24px] 2xl:text-[32px] 2xl:pt-1">
            about me
          </h1>
        </div>

        <div
          className="font-nunito sm:flex sm:flex-row sm:justify-between sm:items-center pb-10"
          key={lastData.id}
        >
          <div className="text-[#C4C4C4] text-sm leading-normal max-w-xs md:text-[20px] md:max-w-md xl:max-w-2xl">
            {lastData.story}
          </div>
          <div className="flex justify-center items-center flex-col gap-[14px] py-10 sm:py-0">
            <div className="relative inline-block">
              <img
                src="/icons/mobile-star.svg"
                alt="star"
                className="block sm:hidden"
              />
              <img
                src="/icons/lg-star.svg"
                alt="star"
                className="hidden sm:block"
              />
              <h2
                className="absolute inset-0 flex items-center
                justify-center text-[#000] text-2xl font-bold tracking-wider md:text-[40px]"
              >
                {lastData.experience}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesAbout;
