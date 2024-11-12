import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useGetServiceById from "../../hooks/useGetServiceById";
import { useEffect } from "react";
import useEditService from "../../hooks/useEditService";

function AdminEditPage({
  setAddingOpenEditPage,
  AddingOpenEditPage,
  EditPageId,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    mutate: editService,
    isLoading: isMutating,
    isSuccess,
    error: mutationError,
  } = useEditService();

  const { data, error, isLoading } = useGetServiceById(EditPageId);

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

  useEffect(() => {
    if (data) {
      reset({
        name: data.data.name,
        sessions_single: data.data.sessions_single,
        sessions_five: data.data.sessions_five,
        sessions_ten: data.data.sessions_ten,
      });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    editService(
      { id: EditPageId, updatedService: formData },
      {
        onSuccess: () => {
          reset();
          setAddingOpenEditPage(false);
        },
      }
    );
  };
  return (
    <div className="relative z-10 font-Nunito text-[#FFF]">
      <motion.div
        className="fixed bottom-0 left-0 w-full h-[100vh] bg-[#121212] z-50 p-[24px] flex flex-col items-start overflow-y-auto"
        initial="closed"
        animate={AddingOpenEditPage ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="flex justify-between w-full border-b border-[#6F6F6F] mb-[10px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[25px] font-bold">Services</h1>
            <h3 className="text-[15px] font-[500] mb-[10px]">
              Add services you provide
            </h3>
          </div>
          <button onClick={() => setAddingOpenEditPage(false)}>
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
                Type name
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
                Type single session Price
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
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type five session Price
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="number"
                {...register("sessions_five", {
                  required: "Five session price is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    value > 0 || "Price must be greater than zero",
                })}
              />
              <div className="flex mt-[10px] font-bold">
                {errors.sessions_five && (
                  <span className="text-red-500">
                    {errors.sessions_five.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#FFF] font-bold"></span>
                Type ten session Price
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="number"
                {...register("sessions_ten", {
                  required: "Ten session price is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    value > 0 || "Price must be greater than zero",
                })}
              />
              <div className="flex mt-[10px] font-bold">
                {errors.sessions_ten && (
                  <span className="text-red-500">
                    {errors.sessions_ten.message}
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
              + Edit Service
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default AdminEditPage;
