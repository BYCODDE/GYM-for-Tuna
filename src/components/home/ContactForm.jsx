import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        reset();
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        alert("Message failed to send.");
      });
  };

  return (
    <section className="py-10 px-[37px] md:max-w-[1281px] xl:mx-auto xl:px-[0]">
      <div className="flex justify-center items-center flex-col md:justify-start md:items-start">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-st gap-2 w-[296px] max-w-full font-Nunito text-xs text-form-main md:w-[522px]"
        >
          <h1 className="text-sm font-bold gradient-main uppercase pb-4">
            Contact
          </h1>
          <input
            type="text"
            placeholder="Full Name"
            className={`border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px] ${
              errors.fullName ? "border-red-500" : ""
            }`}
            {...register("fullName", { required: "Full Name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            className={`border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px] ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}

          <input
            type="text"
            placeholder="Phone Number"
            className={`border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px] ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
            {...register("phoneNumber", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
          )}

          <textarea
            placeholder="Message"
            className={`border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px] ${
              errors.message ? "border-red-500" : ""
            }`}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message.message}</p>
          )}

          <div className="text-right">
            <button
              type="submit"
              className="border border-[#4D4D4D] opacity-80 rounded-[8px]
               bg-primary-bg py-[8.5px] px-[46px] hover:bg-[#B8D44A] duration-500 ease-in-out hover:text-[#000]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
