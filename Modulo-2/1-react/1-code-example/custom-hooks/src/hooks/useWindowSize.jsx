import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    widht: window.innerWidth,
    height: window.height
  }));

  useEffect(() => {
    const hanldeResize = () => {
      setWindowSize({
        widht: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", hanldeResize);

    return () => {
      window.removeEventListener("resize", hanldeResize);
    }
  }, []);

  return windowSize
}

export default useWindowSize;