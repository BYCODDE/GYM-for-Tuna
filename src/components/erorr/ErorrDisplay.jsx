const ErorrDisplay = ({ error }) => {
  return (
    <div className="text-red-500 font-Nunito font-semibold text-base text-center py-10 md:max-w-[1280px] md:mx-auto">
      <p className="px-[37px] 2xl:px-0">Error fetching data: {error}</p>
    </div>
  );
};

export default ErorrDisplay;
