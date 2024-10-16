import useGetCertification from "../../hooks/useGetCertification";
import Arrows from "../../ui/Arrows";
import ErorrDisplay from "../erorr/ErorrDisplay";
import CertificationSkeleton from "../skeletons/CertificationSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function Certification() {
  const { data, isLoading, error } = useGetCertification();

  if (isLoading) {
    return <CertificationSkeleton />;
  }

  if (error) {
    return <ErorrDisplay error={error.message} />;
  }

  return (
    <div className="mt-[10px] pb-10 md:max-w-[1281px] md:mx-auto 2xl:px-0 text-white px-[37px] flex flex-col justify-center">
      <div className="md:gap-[15px] flex gap-[9px] items-center ml-[10px]">
        <Arrows />
        <h3 className="mt-[8px] text-center xl:text-[32px] text-sm font-bold uppercase leading-normal gradient-main pb-4 md:text-2xl font-Nunito">
          certification
        </h3>
      </div>
      <div className="mt-[30px] mb-[30px]">
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            draggable: true,
            hide: false,
            dragSize: 30,
          }}
          spaceBetween={30}
          slidesPerView="auto"
          className="relative scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack"
        >
          {data.certification.map((cert) => (
            <SwiperSlide key={cert.id} className="flex items-center gap-4 ">
              <img src="/icons/certification_svg.svg" alt="certification" />
              <p className="md:text-[14px] text-[12px] font-bold font-Nunito">
                {cert.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Certification;
