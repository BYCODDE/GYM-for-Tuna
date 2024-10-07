import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const FitnessJourney = () => {
  return (
    <section>
      <h1 className="text-sm font-bold gradient-main uppercase">
        Your Fitness Journey Starts Here
      </h1>
      <div>
        <Swiper spaceBetween={25} slidesPerView={1.1}>
          <SwiperSlide>
            <img src={""} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FitnessJourney;
