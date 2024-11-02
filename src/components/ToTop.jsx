import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ToTop = () => {
  const [activeToTop, setActiveToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setActiveToTop(false);
      else setActiveToTop(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {activeToTop && (
        <Button onClick={() => window.scrollTo(0, 0)} className="toTop">
          <i class="bi bi-arrow-up-circle"></i>
        </Button>
      )}
    </>
  );
};

export default ToTop;
