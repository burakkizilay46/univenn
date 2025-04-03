"use client";
import { useLayoutEffect, useState } from "react";

export default function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState<null | number>(null);

  useLayoutEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [screenWidth];
}
