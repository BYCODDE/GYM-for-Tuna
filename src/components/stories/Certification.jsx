import useGetCertification from "../../hooks/useGetCertification";

function Certification() {
  const { data, isLoading, error } = useGetCertification();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="text-white px-[37px] flex flex-col justify-center md:max-w-[1280px] md:mx-auto 2xl:px-0">
      <div className="flex gap-[9px] items-center ml-[10px]">
        <img src="/icons/arrow-right.svg" alt="icon" className="lg:hidden" />
        <img
          src="/icons/three-arrow-right.svg"
          alt="icon"
          className="hidden lg:block 2xl:hidden"
        />
        <img
          src="/icons/four-arrow-right.svg"
          alt="icon"
          className="hidden 2xl:block"
        />
        <h3
          className="text-[14px]  font-bold uppercase font-Nunito  
        gradient-main leading-5 2xl:text-[32px] 2xl:leading-normal"
        >
          Certification
        </h3>
      </div>
      <div className="flex flex-col mt-[30px] mb-[30px] gap-[9px]">
        {data.certification.map((data) => (
          <div key={data.id} className="flex items-center gap-4">
            <img src="/icons/certification_svg.svg" alt="certification" />
            <p className="text-[12px] font-bold font-Nunito">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
