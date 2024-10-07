import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useGetFitnessJourney from "../../hooks/useGetFitnessJourney";

const FitnessJourney = () => {
  const { data, isLoading, error } = useGetFitnessJourney();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>something went wrong:{error}</p>;
  }
  return (
    <section className="px-[37px] md:max-w-[1281px] xl:mx-auto 2xl:px-[0]">
      <h1 className="text-sm font-bold gradient-main uppercase pb-6">
        Your Fitness Journey Starts Here
      </h1>
      <div className="">
        <Swiper
          spaceBetween={25}
          slidesPerView={1.1}
          breakpoints={{
            456: {
              slidesPerView: 1.8,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 300,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 300,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 300,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 300,
            },
          }}
        >
          {data.fitnessJourney.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="border border-[#4D4D4D] rounded-[14px] p-5  flex flex-col justify-end items-center w-fit">
                <div>
                  <img
                    src={data.image}
                    alt="carousel-items"
                    className="w-[255px] h-[225px] object-cover rounded-[7px] object-center md:min-w-[265px] md:h-[244px]"
                  />

                  <h2 className="font-nunito text-[#fff]  text-sm font-bold pt-4 flex">
                    {data.name}
                  </h2>
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
