import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useGetTrainer from "../../hooks/useGetTrainer";
import useGetCertification from "../../hooks/useGetCertification";
import useEditTrainer from "../../hooks/useEditTrainer";

const AboutMe = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const { data: aboutTrainer, error } = useGetTrainer();
  const { data: certification, error: certficationError } =
    useGetCertification();
  console.log(certficationError);
  const {
    mutate: aboutmeMutation,
    isLoading,
    error: editError,
    isSuccess,
  } = useEditTrainer();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
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
    const dataCertification = certification?.certification;

    if (trainer && dataCertification) {
      setImagePreview(trainer.image);

      const certifications = dataCertification
        .map((item) => `* ${item.name}`)
        .join("\n\n");

      reset({
        experience: trainer.experience || "",
        image: trainer.image || "",
        story: trainer.story || "",
        certification: certifications || "",
      });
    }
  }, [aboutTrainer, reset, certification]);

  const onSubmit = (data, event) => {
    event.preventDefault();

    // Prepare the payload to include the trainer ID and updated data
    const payload = {
      id: aboutTrainer?.aboutTrainer?.[0]?.id, // Assuming the trainer has an 'id' field
      updatedTrainer: {
        experience: data.experience,
        story: data.story,

        image: imagePreview || data.image, // Ensure image is passed correctly
      },
    };

    console.log("Submitting payload:", payload); // Debug log for validation

    aboutmeMutation(payload, {
      onSuccess: () => {
        console.log("Mutation was successful!");
        reset(); // Reset form after successful mutation
      },
      onError: (error) => {
        console.error("Mutation failed:", error.message);
      },
    });
  };

  if (error) {
    return (
      <div className="text-red-600 flex text-[20px] justify-center">
        Error loading service data!
      </div>
    );
  }
  console.log(errors);

  return (
    <div className="lg:p-[82px] text-[#FFF] font-Nunito p-[22px]">
      <div className="flex items-center justify-between font-bold">
        <h3 className="text-[22px] md:hidden flex">About Me</h3>
        <div className="md:block hidden">
          <h3 className="text-[22px]">About Me</h3>
          <p className="text-[15px] font-normal">Add info for your clients</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center">
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
                Certification
              </h3>
              <textarea
                className="w-full h-[150px] focus:outline-none focus:border-none flex p-[10px] items-start rounded-[8px] bg-[#323232] text-white whitespace-pre-wrap"
                {...register("certification", {
                  required: "Please share your certification",
                })}
              />
              {errors.certification && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.certification.message}
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
                  validate: {
                    imageRequired: (value) => {
                      if (value) {
                        return true;
                      } else {
                        return "Image is required";
                      }
                    },
                  },
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
                    className="w-[150px] h-auto rounded-[8px]"
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
