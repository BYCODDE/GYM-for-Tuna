import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useGetTrainer from "../../hooks/useGetTrainer";
import useGetCertification from "../../hooks/useGetCertification";
import useEditTrainer from "../../hooks/useEditTrainer";
// import useAddCertification from "../../hooks/useAddCertificaton";
import useRemoveCertification from "../../hooks/useRemoveCertification";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCertificationId, setSelectedCertificationId] = useState(null);
  const { data: aboutTrainer, error } = useGetTrainer();
  // const [addingOpen, setAddingOpen] = useState(true);
  const [visibleCertifications, setVisibleCertifications] = useState({});

  const { data: certification, error: certificationError } =
    useGetCertification();
  const {
    mutate: aboutmeMutation,
    isLoading,
    error: editError,
    isSuccess,
  } = useEditTrainer();

  const { removeCertification, isRemoving, removeError } =
    useRemoveCertification();

  const toggleShowCertification = (id) => {
    setVisibleCertifications((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
  console.log(certification?.certification);

  const dataCertification = certification?.certification || [];

  useEffect(() => {
    const trainer = aboutTrainer?.aboutTrainer?.[0];

    if (trainer) {
      setImagePreview(trainer.image);

      reset({
        experience: trainer.experience || "",
        image: trainer.image || "",
        story: trainer.story || "",
        // certification: certifications || "", //TODO: ეს უნდა ამოვიღო,დიზაინიდან და ლოგიკიდან გამომდინარე!
      });
    }
  }, [aboutTrainer, certification, reset]);

  const onSubmit = (data) => {
    const payload = {
      id: aboutTrainer?.aboutTrainer?.[0]?.id,
      updatedTrainer: {
        experience: data.experience,
        story: data.story,
        image: imagePreview || data.image,
      },
    };

    aboutmeMutation(payload, {
      onSuccess: () => {
        reset();
      },
      onError: (editError) => {
        console.error("Error updating trainer:", editError.message);
      },
    });
  };

  // Handle errors in loading data
  if (error || certificationError) {
    return (
      <div className="text-red-600 flex text-[20px] justify-center">
        Error loading service data!
      </div>
    );
  }

  // Function to handle selecting a certification to delete
  // TODO: კონკრეტულ აიდიზე უნდა მოვიყვანო დაჭერისას როგორც სერვისში!
  const handleDelete = (certificationId) => {
    certificationId = 53;
    setSelectedCertificationId(certificationId); // Set the selected certification ID
    removeCertification(certificationId); // Pass the certification ID to remove
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

      <div className="flex flex-col justify-between items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white w-full text-center mt-[41px] gap-[3.25rem] flex flex-col"
        >
          <div className="flex flex-col gap-[50px]">
            {/* Experience Field */}
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

            {/* Story Field */}
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

            {/* Certification Field */}
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                Certification
              </h3>

              {/* <textarea
                className="w-full h-[150px] focus:outline-none focus:border-none flex p-[10px] items-start rounded-[8px] bg-[#323232] text-white whitespace-pre-wrap"
                {...register("certification", {
                  required: "Please share your certification",
                })}
              />
              {errors.certification && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.certification.message}
                </div>
              )} */}
              <div className="flex flex-col gap-[20px]">
                {dataCertification.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex flex-col w-full bg-[#222] rounded-[20px] mt-[20px] overflow-hidden cursor-pointer"
                    animate={{
                      height: visibleCertifications[item.id] ? "auto" : "70px",
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => toggleShowCertification(item.id)} // Assuming you will add a function to toggle visibility
                  >
                    <div className="flex h-[70px] py-[8px] px-[16px] items-center gap-[10px] justify-between w-full">
                      <h3 className="text-white">{item.name}</h3>
                      <motion.img
                        src="/icons/service-arrow.svg"
                        alt="Close"
                        className="w-[40px] h-[40px] cursor-pointer transition-transform"
                        animate={{
                          rotate: visibleCertifications[item.id] ? -79 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    </div>
                    <AnimatePresence>
                      {visibleCertifications[item.id] && (
                        <motion.div
                          className="flex flex-col gap-[10px] mt-4 overflow-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex flex-col gap-3 p-4">
                            <div className="flex items-center gap-[10px] justify-between">
                              <div className="flex gap-[10px] items-center">
                                <motion.img
                                  src="/icons/adminTrashcan_svg.svg"
                                  alt="delete"
                                  className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete(item.id);
                                  }}
                                />
                                <motion.img
                                  src="/icons/adminEdit_svg.svg"
                                  alt="edit"
                                  className="cursor-pointer w-[30px] h-[30px] hover:scale-110 transition-transform"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    // TODO:აქ დაედითებისას უნდა!
                                    // handleDelete(item.id); // Changed to `item.id`
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Upload Field */}
            <div className="w-full">
              <h3 className="flex items-center mb-[20px] gap-[10px]">
                Upload Image
              </h3>
              <input
                type="file"
                accept="image/*"
                className="w-full focus:outline-none focus:border-none flex p-[10px] items-center rounded-[8px] bg-[#323232]"
                {...register("image")}
                onChange={handleImageChange}
              />
              {errors.image && (
                <div className="flex mt-[10px] font-bold text-red-500">
                  {errors.image.message}
                </div>
              )}

              {/* Preview Image */}
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

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              className="max-w-[195px] w-full text-[black] h-[42px] bg-[#D7FD44] rounded-[24px] font-bold"
              type="submit"
            >
              Update Profile
            </button>
          </div>

          {/* Remove Certification Button */}
          <div className="flex justify-center items-center">
            <button
              className="max-w-[195px] w-full text-[black] h-[42px] bg-[#D7FD44] rounded-[24px] font-bold"
              type="button"
              onClick={() => handleDelete(selectedCertificationId)} // Update with the selected certification ID
            >
              Remove Certification
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
