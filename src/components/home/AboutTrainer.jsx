import { Link } from "react-router-dom";
import useGetTrainer from "../../hooks/useGetTrainer";
const AboutTrainer = () => {

  const { data, error, isLoading } = useGetTrainer();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <section className="pb-10 px-[37px] pt-10">
      <h1 className="text-sm font-bold uppercase leading-normal gradient-main pb-4">
        ABOUT ME
      </h1>

      {data.aboutTrainer.map((data) => {
        return (
          <div className="font-Nunito flex flex-col gap-4" key={data.id}>
            <div
              className={`h-[212.581px] bg-cover max-w-[295px] rounded-[16px]`}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundPosition: `center -30px`,
              }}
            ></div>
            <div className="flex flex-col gap-4">
              <p className="text-primary-paragraph text-xs max-w-xs">
                {data.story}
              </p>
              <Link to="/stories" className="w-fit">
                <button
                  type="button"
                  className="bg-[#B8D44A] rounded-lg text-[#000] text-sm px-[38.5px] py-[8.5px] 
                    hover:brightness-105 hover:bg-opacity-40 transition-all duration-500 ease-in-out"
                >
                  See More
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AboutTrainer;
