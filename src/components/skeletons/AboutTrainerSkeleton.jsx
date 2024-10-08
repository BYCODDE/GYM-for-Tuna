import { tailChase } from "ldrs";

const AboutTrainerSkeleton = () => {
  tailChase.register();

  return (
    <div className="px-[37px] my-5 md:max-w-[1282px] md:mx-auto 2xl:px-0">
      <div
        className={`h-[212.581px] bg-cover max-w-[295px] rounded-[16px] 
            md:max-w-[587px] md:h-[423px] lg:max-w-[630px] 
            lg:w-full lg:h-[423px] border border-[#ccc] flex justify-center items-center`}
      >
        <l-tail-chase size="40" speed="1.75" color="#D7FD44"></l-tail-chase>
      </div>
      <div className="flex flex-col gap-4 lg:justify-between mt-4">
        <p
          className="max-w-[295px] h-40  md:max-w-[630px] 
        border border-[#ccc] rounded-xl flex justify-center items-center"
        >
          <l-tail-chase size="40" speed="1.75" color="#D7FD44"></l-tail-chase>
        </p>
      </div>
    </div>
  );
};

export default AboutTrainerSkeleton;
