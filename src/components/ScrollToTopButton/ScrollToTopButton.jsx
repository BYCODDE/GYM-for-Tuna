import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show button after scrolling 300px
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="lg:flex hidden w-[50px] h-[50px]   justify-center items-center rounded-[50%] fixed bottom-20 right-3 p-5 bg-[#D7FD44] text-black  shadow-md text-[30px] font-bold"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
