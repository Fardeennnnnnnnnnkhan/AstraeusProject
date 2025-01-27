import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top whenever the route changes
  }, [location]);

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
