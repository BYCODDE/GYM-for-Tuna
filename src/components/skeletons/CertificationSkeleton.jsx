import { tailChase } from "ldrs";
const CertificationSkeleton = () => {
  tailChase.register();
  return (
    <div className="md:max-w-[1282px] md:mx-auto pt-5 pb-5">
      <div className=" h-[303px] md:h-[360px]  border border-[#ccc] rounded-xl flex justify-center items-center mx-[37px] 2xl:mx-0">
        <l-tail-chase size="40" speed="1.75" color="#D7FD44"></l-tail-chase>
      </div>
    </div>
  );
};

export default CertificationSkeleton;
