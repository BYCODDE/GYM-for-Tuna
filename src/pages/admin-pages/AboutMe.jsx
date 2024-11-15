import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useGetTrainer from "../../hooks/useGetTrainer";

const AboutMe = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const { data: aboutTrainer, error } = useGetTrainer();

  console.log(aboutTrainer);
  console.log(error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const trainer = aboutTrainer?.aboutTrainer?.[0];
    if (trainer) {
      console.log(trainer.image);
      setImagePreview(trainer.image);
      reset({
        experience: trainer.experience || "",
        image: trainer.image || "",
        story: trainer.story || "",
      });
    }
  }, [aboutTrainer, reset]);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setImagePreview(null);
  };

  return (
    <div className="lg:p-[82px] text-[#FFF] font-Nunito p-[22px]">
      <div className="flex items-center justify-between font-bold">
        <h3 className="text-[22px] md:hidden flex">About Me</h3>
        <div className="md:block hidden">
          <h3 className="text-[22px]">About Me</h3>
          <p className="text-[15px] font-normal">Add info for your clients</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white w-full text-center mt-[41px] gap-[3.25rem] flex flex-col"
        >
          <div className="flex flex-col gap-[50px]">
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                Experience
              </h3>
              <input
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                type="text"
                {...register("experience", {
                  required: "Experience title is required",
                })}
              />
              {errors.experience && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.experience.message}
                </div>
              )}
            </div>

            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                Share your story
              </h3>
              <textarea
                className="w-full h-[150px] focus:outline-none focus:border-none flex p-[10px] items-start rounded-[8px] bg-[#323232]"
                {...register("story", {
                  required: "Please share your story",
                })}
              />
              {errors.story && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.story.message}
                </div>
              )}
            </div>

            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                Upload Image
              </h3>
              <input
                type="file"
                accept="image/*"
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                {...register("image", {
                  required: "Image is required",
                })}
                onChange={handleImageChange}
              />
              {errors.image && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.image.message}
                </div>
              )}

              {imagePreview && (
                <div className="mt-[20px]">
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="w-full h-auto rounded-[8px]"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="max-w-[195px] w-full text-[black] h-[42px] bg-[#D7FD44] rounded-[24px] font-bold"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
