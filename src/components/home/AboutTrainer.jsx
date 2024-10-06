import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AboutTrainer = () => {
  const fetchTrainerData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/about`,
      {
        headers: {
          apikey: import.meta.env.VITE_SUPABASE_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["trainerData"],
    queryFn: fetchTrainerData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }
  console.log(data);
  return (
    <section className="pb-10 px-[37px] pt-10">
      <h1 className="text-sm font-bold uppercase leading-normal gradient-main pb-4">
        ABOUT ME
      </h1>

      {data.map((data) => {
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
