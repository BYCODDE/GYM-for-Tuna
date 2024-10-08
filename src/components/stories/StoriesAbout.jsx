import useGetTrainer from "../../hooks/useGetTrainer";

const StoriesAbout = () => {
  const { data, isLoading, error } = useGetTrainer();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <section className="flex flex-col md:max-w-[1280px] md:mx-auto">
      <div className="px-[37px] 2xl:px-0">
        <div className="flex items-center gap-4 pb-6">
          <img src="/icons/arrow-right.svg" alt="arrow" className="lg:hidden" />
          <img
            src="/icons/three-arrow-right.svg"
            alt="arrow"
            className="hidden lg:block xl:hidden"
          />
          <img
            src="/icons/four-arrow-right.svg"
            alt="arrow"
            className="hidden xl:block"
          />
          <h1 className="gradient-main font-Nunito text-sm uppercase font-bold md:text-[24px] xl:text-[32px] 2xl:pt-1">
            about me
          </h1>
        </div>
        {data?.aboutTrainer.map((about) => (
          <div
            className="font-nunito sm:flex sm:flex-row sm:justify-between sm:items-center pb-10"
            key={about.id}
          >
            <div className="text-[#C4C4C4] text-sm leading-normal max-w-xs md:text-[20px] md:max-w-md xl:max-w-2xl">
              {about.story}
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
                  3+
                </h2>
              </div>

              <h2 className="text-white text-sm max-w-[160px] lg:max-w-full text-center lg:text-[20px]">
                {about.experience}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoriesAbout;
