import { useEffect, useState } from "react";

const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowOuterWidth, setWindowOuterWidth] = useState(0);
  const [windowOuterHeight, setWindowOuterHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setWindowOuterWidth(window.outerWidth);
      setWindowOuterHeight(window.outerHeight);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    windowWidth,
    windowHeight,
    windowOuterWidth,
    windowOuterHeight,
    scrollY,
  };
};

export default useWindow;
