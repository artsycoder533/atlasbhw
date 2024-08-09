"use client"
import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollButton);
    return () => {
      window.removeEventListener("scroll", toggleScrollButton);
    };
  }, []);

  const toggleScrollButton = () => {
    if (window.scrollY > 100) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  };

  const scrollPageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {toTop ? (
        <button
          className="shadow-md  fixed bottom-[100px] right-5 rounded-lg bg-accent text-white cursor-pointer shadow-mg hover:opacity-75 hover:border hover:shadow-lg opacity-75 border-white p-2 z-10"
          onClick={scrollPageUp}>
          <FiArrowUp className="text-3xl font-extrabold" />
        </button>
      ) : null}
    </>
  );
}

export default ScrollToTop;