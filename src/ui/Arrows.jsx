function Arrows() {
  return (
    <>
      <img
        className="md:hidden"
        src="/icons/arrow-right.svg"
        alt="arrow-right"
      />
      <img
        className="hidden md:block xl:hidden"
        src="/icons/three-arrow-right.svg"
        alt="three-arrow-right"
      />
      <img
        className="hidden xl:block"
        src="/icons/four-arrow-right.svg"
        alt="four-arrow-right"
      />
    </>
  );
}

export default Arrows;
