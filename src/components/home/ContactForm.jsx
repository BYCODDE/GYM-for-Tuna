const ContactForm = () => {
  return (
    <section className="py-10 px-[37px] ">
      <div className="flex justify-center items-center flex-col">
        <form className="flex flex-col items-st gap-2 w-[296px] max-w-full font-Nunito text-xs text-form-main">
          <h1 className="text-sm font-bold gradient-main uppercase pb-4">
            Contact
          </h1>
          <input
            type="text"
            placeholder="Full Name"
            className="border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px]"
          />
          <textarea
            placeholder="Message"
            className="border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-5 px-[22px]"
          ></textarea>
          <div className="text-right">
            <button
              type="submit"
              className="border border-[#4D4D4D] opacity-80 rounded-[8px] bg-primary-bg py-[8.5px] px-[46px]"
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
