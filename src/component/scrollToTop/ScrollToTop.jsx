import React, { useEffect, useState } from "react";
import "../../style/component/ScrollToTop/scrollToTop.css";
import { IoIosArrowUp } from "react-icons/io";
const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="top-to-btn">
        {showTopBtn && (
          <IoIosArrowUp
            className="icon-position icon-style"
            onClick={goToTop}
          />

          // <FaAngleUp  />
        )}
      </div>
    </>
  );
};

export default ScrollToTop;
