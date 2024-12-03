import { tailChase } from "ldrs";

const PricesSkeleton = () => {
  tailChase.register();
  return (
    <div className="md:max-w-[1280px] mx-auto pb-10">
      <div className="h-[335px] md:h-[603px] border border-[#ccc] rounded-xl flex justify-center items-center mx-[37px] 2xl:mx-0">
        <l-tail-chase size="40" speed="1.75" color="#D7FD44"></l-tail-chase>
      </div>
    </div>
  );
};

export default PricesSkeleton;
