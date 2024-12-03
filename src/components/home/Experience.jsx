function Experience() {
  return (
    <div className="md:text-[14px] tiny:gap-[10px] bg-[#D7FD44] py-[10px]
     px-[40px] text-[#000000] text-[10px] flex justify-between
     items-center text-center gap-[15px] huge:max-w-[2150px] huge:mx-auto">
      <img className="md:block  hidden" src="/icons/Star.svg" alt="star" />
      <h3 className="flex flex-col">
        <span className="md:flex md:text-[32px] font-bold text-[14px]">
          200 +
        </span>{" "}
        <span className="font-[500]">Happy Customers</span>
      </h3>
      <h3 className="flex flex-col">
        <span className="md:flex md:text-[32px] font-bold text-[14px]">3+</span>
        <span className="font-[500]"> Years Of Training Experience</span>
      </h3>
      <h3 className="flex flex-col">
        <span className="md:flex md:text-[32px] font-bold text-[14px]">
          98 %
        </span>{" "}
        <span className="font-[500]">Customer Satisfaction</span>
      </h3>
      <img className="md:block  hidden" src="/icons/Star.svg" alt="star" />
    </div>
  );
}

export default Experience;
