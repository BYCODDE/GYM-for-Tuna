import { useState, useLayoutEffect } from "react";

function ArrowsRight() {
  const [url, setUrl] = useState(getUrl(window.innerWidth));
  function getUrl(width) {
    if (width >= 768 && width <= 1024) {
      return "/icons/three-arrow-right.svg";
    } else if (width > 1024) {
      return "/icons/four-arrow-right.svg";
    } else {
      return "/icons/arrow-right.svg";
    }
  }

  useLayoutEffect(() => {
    function handleResize() {
      setUrl(getUrl(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <img src={url} alt="arrowRight" />;
}

export default ArrowsRight;
