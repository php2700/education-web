import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Upward = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="
    fixed bottom-6 right-6 z-50
    bg-gradient-to-r from-blue-600 to-indigo-600
    text-white p-4 rounded-full shadow-xl
    transition-all duration-300 ease-in-out
    hover:scale-110 hover:rotate-12
    active:scale-95
  "
      >
        <ArrowUp size={22} />
      </button>
    )
  );
};
