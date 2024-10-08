import { tailChase } from "ldrs";

const SuccessCarouselSkeleton = () => {
  tailChase.register();
  return (
    <div className="md:max-w-[1282px] mx-auto">
      <div className=" h-[303px] md:h-[603px] border border-[#ccc] rounded-xl flex justify-center items-center mx-[37px] xl:mx-0">
        <l-tail-chase size="40" speed="1.75" color="#D7FD44"></l-tail-chase>
      </div>
    </div>
  );
};

export default SuccessCarouselSkeleton;
