import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import  useGetStory  from "../../hooks/useGetStory";

const SuccessCarousel = () => {
  const { data, isLoading, error } = useGetStory();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <section className="px-[37px] font-Nunito border border-[#4D4D4D] rounded-2xl py-10">
      <div className="flex items-center gap-4 pb-6">
        <img src="/icons/arrow-right.svg" alt="success-stories" />
        <h2 className="text-sm font-bold gradient-main uppercase">
          Success Story
        </h2>
      </div>
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.3}
          style={{ width: "100%", maxWidth: "100%" }}
        >
          {data.successStory.map((data, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "305px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={data.image}
                alt={`carousel-item`}
                className="object-cover w-[305px] h-[190px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pt-6 flex justify-end">
        <img src="/icons/arrow-left.svg" alt="success-stories" />
      </div>
    </section>
  );
};

export default SuccessCarousel;
