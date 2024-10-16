import useGetCertification from "../../hooks/useGetCertification";
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
    return (
      <ErorrDisplay error={error.message || "An unknown error occurred."} />
    );
  }

  return (
    <div className="mt-10 pb-10 md:max-w-[1281px] md:mx-auto 2xl:px-0 text-white px-10">
      <h3 className="mt-8 text-center xl:text-[32px] text-sm font-bold uppercase leading-normal gradient-main pb-4 md:text-2xl font-Nunito">
        Certification
      </h3>
      <div className="mt-8 mb-8 cursor-pointer">
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            draggable: true,
            hide: false,
            dragSize: 30,
          }}
          spaceBetween={30}
          slidesPerView="auto"
          className="scrollbar-thin scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack"
        >
          {data.certification.map((cert) => (
            <SwiperSlide key={cert.id} className="flex items-center gap-4 p-3">
              <img
                src="/icons/certification_svg.svg"
                alt={`Certification for ${cert.name}`}
              />
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
