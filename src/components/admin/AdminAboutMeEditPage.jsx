import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function AdminAboutMeEditPage({ setOpenEditPage, openEditPage }) {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  return (
    <div className="relative z-10 font-Nunito text-[#FFF]">
      <motion.div
        className="fixed bottom-0 left-0 w-full h-[100vh] bg-[#121212] z-50 p-[24px] flex flex-col items-start overflow-y-auto"
        initial="closed"
      >
        <div className="flex justify-between w-full border-b border-[#6F6F6F] mb-[10px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] font-bold">About Me</h1>
            <h3 className="text-[15px] font-[500] mb-[10px]">Edit About Me</h3>
          </div>
          <button>
            <img
              src="/icons/adminRemove_svg.svg"
              alt="Close"
              className="w-[40px] h-[40px] cursor-pointer"
              onClick={() => setOpenEditPage(!openEditPage)}
            />
          </button>
        </div>

        <form
          onSubmit
          className="text-white w-full text-center mt-[50px] gap-[3.25rem] flex flex-col"
        >
          <div className="flex flex-col gap-[50px]">
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type certification name here:
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="text"
                {...register("certificationName", {
                  required: "Please share your certification",
                })}
              />
              {errors.name && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.name.message}
                </div>
              )}
            </div>

            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type certification startDate here:
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="text"
                {...register("startDate", {
                  required: "Please share your startDate",
                })}
              />
              {errors.sessions_single && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.sessions_single.message}
                </div>
              )}
            </div>

            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type certification endDate here:
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="text"
                {...register("endDate", {
                  required: "Please share your endDate",
                })}
              />
              {errors.sessions_five && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.sessions_five.message}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="max-w-[195px] w-full text-[#D7FD44] h-[42px] border border-[#D7FD44] rounded-[24px]"
              type="submit"
            >
              + Edit Certification
            </button>
          </div>
          {/* {isSuccess && (
            <div className="font-bold text-green-800 text-[20px]">Success</div>
          )} */}
          {/* {isError && (
            <div className="font-bold text-red-800 text-[20px]">
              Error in editing
            </div>
          )} */}
          {/* {mutationError && (
            <div className="font-bold text-red-800 text-[20px]">
              {mutationError.message ||
                "An error occurred during the service update."}
            </div>
          )} */}
        </form>
      </motion.div>
    </div>
  );
}

export default AdminAboutMeEditPage;
