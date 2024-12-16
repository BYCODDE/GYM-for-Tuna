import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function AdminBlogsAddingContainer({ openPage, setOpenPage }) {
  console.log(openPage);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // onSuccess: () => {
    console.log(data);

    reset();
    setOpenPage(false);
  };
  const menuVariants = {
    open: {
      y: 0,
      transition: { type: "spring", stiffness: 30 },
    },
    closed: {
      y: "100%",
      transition: { type: "spring", stiffness: 30 },
    },
  };

  return (
    <div className="relative z-10 font-Nunito text-[#FFF]">
      <motion.div
        className="fixed bottom-0 left-0 w-full h-[100vh] bg-[#121212] z-50 p-[24px] flex flex-col items-start overflow-y-auto"
        initial="closed"
        animate={openPage ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-between w-full border-b border-[#6F6F6F] mb-[10px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] font-bold">Add Blogs</h1>
            <h3 className="text-[15px] font-[500] mb-[10px]">
              Add Blogs you want
            </h3>
          </div>
          <button onClick={() => setOpenPage(false)}>
            <img
              src="/icons/adminRemove_svg.svg"
              alt="Close"
              className="w-[40px] h-[40px] cursor-pointer"
            />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white w-full text-center mt-[41px] gap-[3.25rem] flex flex-col"
        >
          <div className="flex flex-col gap-[50px]">
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type tittle
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="text"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-z\s-]+$/i,
                    message: "Only letters, spaces, and hyphens are allowed",
                  },
                  setValueAs: (value) => value.toLowerCase(),
                })}
              />

              <div className="flex mt-[10px] font-bold">
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
            </div>

            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type description
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="number"
                {...register("sessions_single", {
                  required: "Single session price is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    value > 0 || "Price must be greater than zero",
                })}
              />
              <div className="flex mt-[10px] font-bold">
                {errors.sessions_single && (
                  <span className="text-red-500">
                    {errors.sessions_single.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="max-w-[195px] w-full text-[#D7FD44] h-[42px] border border-[#D7FD44] rounded-[24px]"
              type="submit"

            >
              + Add Blogs
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default AdminBlogsAddingContainer;
