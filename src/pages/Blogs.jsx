import FitnessJourney from "../components/home/FitnessJourney";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import useGetBlogs from "../hooks/useGetBlogs";

function Blogs() {
  let { data: blogs, error } = useGetBlogs();

  console.log(error);

  const blog = blogs?.blogs || [];

  return (
    <div className="flex flex-col   font-Nunito bg-[#121212] ">
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className=" mt-[20px]  text-[20px] md:text-[40px] text-[#C4C4C4] font-bold uppercase">
          Private personal training
        </h1>
        <div className="md:justify-center md:flex-row flex flex-col  gap-[15px]  mt-[20px] font-normal items-center">
          <button
            type="button"
            className=" w-[195px] h-[42px] cursor-pointer text-[#D7FD44]  rounded-[24px] font-bold text-[15px] p-[10px] border border-[#D7FD44] pr-[25px] pl-[25px] "
          >
            Workout Routines
          </button>
          <button
            type="button"
            className="w-[195px]   h-[42px] cursor-pointer text-[#D7FD44]  rounded-[24px] font-bold text-[15px] p-[10px] border border-[#D7FD44] pr-[25px] pl-[25px]"
          >
            Nutrition and diet
          </button>
        </div>
        <div>
          <img
            src="/home/desktop/blogMainImage.jpeg"
            className=" max-h-[1100px] w-[90%]  flex justify-center items-center mx-auto mt-[40px] rounded-[20px]"
          />
        </div>
      </div>
      <div className="lg:flex lg:gap-[5rem] md:mt-[5rem]">
        <div className=" md:w-[30%]  flex p-[1.5rem] flex-col w-[60%]">
          <div className="border-b border-b-[##737373]  text-[#737373] text-start min-w-[140px]">
            <h3 className="text-[#FFF] font-[600]">Contributor</h3>
            <div className="flex text-start mt-[20px] gap-[15px] mb-[10px]">
              <img src="/admin/profile.svg" alt="" />
              <div className="flex flex-col">
                <h4 className="text-[#FFF] font-bold">Tuna</h4>
                <span className="font-[500]">1 Month ago</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-start  mt-[15px] text-[#C4C4C4] gap-[10px]">
            <h3>Reading time</h3>
            <div className=" flex gap-[10px]">
              <img src="\icons\Vector.svg" alt="Vector" />
              <span>5 minutes</span>
            </div>
          </div>
        </div>
        <div>
          {blog.map((item, index) => (
            <div
              key={index}
              className="font-bold text-[#FFF] border-b border-b-[##737373] pb-6 mb-[20px] pl-[37px] pr-[37px] gap-[15px] flex flex-col"
            >
              <h3 className="text-[#D7FD44] text-[20px] ">{item.author}</h3>
              <h4 className=" text-[25px]">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-center pl-[37px] pr-[37px] ">
        <h3 className="lg:text-[25px] md:text-[20px]   text-[#C4C4C4] text-[18px]">
          YOUR FITNESS JOURNEY STARTS HERE
        </h3>
        <FitnessJourney />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default Blogs;
