import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useGetFitnessJourney from "../../hooks/useGetFitnessJourney";
import FitnessJourneySkeleton from "../skeletons/FitnessJourneySkeleton";
import ErorrDisplay from "../erorr/ErorrDisplay";

const FitnessJourney = ({title}) => {
  const { data, isLoading, error } = useGetFitnessJourney();

  if (isLoading) {
    return <FitnessJourneySkeleton />;
  }
  if (error) {
    return <ErorrDisplay error={error.message} />;
  }
  console.log(data);
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
              <div className="group border border-[#4D4D4D] rounded-[14px] p-5 flex flex-col justify-between items-center
               w-[255px] h-[350px] transition-all duration-300">
                <div className="w-full">
                  <img
                    src={data.image}
                    alt="carousel-items"
                    className="w-full h-[225px] object-cover rounded-[7px] object-center transition-all 
                    duration-300 group-hover:h-[140px] group-hover:origin-top"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-nunito text-[#fff] text-sm font-bold pt-4 flex">
                    {data.name}
                  </h2>
                  <div className="text-left overflow-y-clip hidden group-hover:block transition-opacity duration-300 pt-2">
                    <p className="font-Nunito text-sm text-white">
                      {data.description}
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
