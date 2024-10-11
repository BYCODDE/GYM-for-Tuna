import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useGetFitnessJourney from "../../hooks/useGetFitnessJourney";
import FitnessJourneySkeleton from "../skeletons/FitnessJourneySkeleton";
import ErorrDisplay from "../erorr/ErorrDisplay";

const FitnessJourney = ({ title }) => {
  const { data, isLoading, error } = useGetFitnessJourney();

  if (isLoading) {
    return <FitnessJourneySkeleton />;
  }
  if (error) {
    return <ErorrDisplay error={error.message} />;
  }
  return (
    <section className="px-[37px] md:w-[1281px] md:max-w-[100%] xl:mx-auto 2xl:px-[0]">
      <h1 className="text-sm font-bold gradient-main uppercase pb-6 pt-20 2xl:text-[32px]">
        {title}
      </h1>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            456: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {data.fitnessJourney.map((data) => (
            <SwiperSlide key={data.id} className="pb-20">
              <div
                className="group border border-[#4D4D4D] rounded-[14px] p-5 flex flex-col items-center
           w-[255px] h-[300px] transition-all duration-300 overflow-hidden"
              >
                <div className="w-full">
                  <img
                    src={data.image}
                    alt="carousel-items"
                    className="w-full h-[225px] object-cover rounded-[7px] object-center transition-all 
               duration-300 group-hover:h-[140px] group-hover:origin-top"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-nunito text-[#fff] text-sm font-bold pt-3 flex">
                    {data.name}
                  </h2>
                  <div className="text-left max-h-0 overflow-hidden group-hover:max-h-[100px] transition-[max-height] duration-300 pt-2">
                    <p className="font-Nunito text-sm text-white">
                      {data.description.slice(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FitnessJourney;
