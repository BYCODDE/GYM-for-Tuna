import { useState, useLayoutEffect } from "react"

function ArrowsLeft() {
  const [url, setUrl] = useState(getUrl(window.innerWidth));

  function getUrl(width) {
    if (width >= 768 && width <= 1024) {
      return "/icons/three-arrow-left.svg";
    } else if (width > 1024) {
      return "/icons/four-arrow-left.svg";
    } else {
      return "/icons/arrow-left.svg";
    }
  }

  useLayoutEffect(() => {
    function handleResize() {
      setUrl(getUrl(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <img src={url} alt="arrowLeft"  />;
}

export default ArrowsLeft
