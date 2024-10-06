import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SuccessCarousel = () => {
  const carouselImages = [
    "/home/mobile/nutt.png",
    "/home/mobile/charlene.png",
    "/home/mobile/john.png",
    "/home/mobile/nate.png",
    "/home/mobile/dylan.png",
    "/home/mobile/rachel.png",
    "/home/mobile/giuseppe.png",
    "/home/mobile/jason.png",
    "/home/mobile/jade.png",
  ];

  return (
    <section className="px-[37px] font-Nunito border border-[#4D4D4D] rounded-2xl py-10">
      <div className="flex items-center gap-4 pb-6">
        <img src="/icons/arrow-right.svg" alt="success-stories" className="" />
        <h2 className="text-sm font-bold gradient-main uppercase">
          Success Story
        </h2>
      </div>
      <div>
        <Swiper spaceBetween={50} slidesPerView={1.3}>
          {carouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`carousel-item-${index + 1}`}
                className="bg-cover bg-no-repeat"
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
