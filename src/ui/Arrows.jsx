import { useState, useEffect } from "react";

function Arrows() {
  const [width, setWidth] = useState(1920);
  let url = null;
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width >= 768 && width <= 1024) {
    url = "/icons/three-arrow-right.svg";
  } else if (width > 1024) {
    url = "/icons/four-arrow-right.svg";
  } else {
    url = "/icons/arrow-right.svg";
  }

  return (
    <>
      <img src={url} alt="arrows" />
    </>
  );
}

export default Arrows;
