import { Swiper, SwiperSlide } from "swiper/react";
import useGetStory from "../../hooks/useGetStory";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import SuccessCarouselSkeleton from "../skeletons/SuccessCarouselSkeleton";
import ErorrDisplay from "../erorr/ErorrDisplay";
import ArrowsRight from "../../ui/ArrowsRight";
import ArrowsLeft from "../../ui/ArrowsLeft";
const SuccessCarousel = () => {
  const { data, isLoading, error } = useGetStory();

  if (isLoading) {
    return <SuccessCarouselSkeleton />;
  }

  if (error) {
    return <ErorrDisplay error={error.message} />;
  }

  return (
    <section
      className="px-[37px] font-Nunito border border-[#4D4D4D]
    rounded-2xl py-10 md:max-w-[1281px]  xl:mx-auto md:mx-[37px]"
    >
      <div className="flex items-center gap-4 pb-6">
        <ArrowsRight />
        <h2 className="text-sm font-bold gradient-main uppercase md:text-[24px] 2xl:text-[32px] 2xl:leading-normal">
          Success Story
        </h2>
      </div>
      <div className="w-full flex flex-wrap flex-col md:h-[500px] justify-center">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.3}
          grid={{
            rows: 1,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid]}
          breakpoints={{
            640: {
              slidesPerView: 2.3,
              grid: { rows: 1 },
            },
            768: {
              slidesPerView: 2,
              grid: { rows: 3 },
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 3 },
            },
          }}
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          {data.successStory.map((story) => (
            <SwiperSlide key={story.id} style={{ width: "305px" }}>
              <img
                src={story.image}
                alt={`carousel-item`}
                className="object-cover object-center w-[305px] h-[190px] pb-11 opacity-80"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="pt-6 flex justify-end">
        <ArrowsLeft />
      </div>
    </section>
  );
};

export default SuccessCarousel;
