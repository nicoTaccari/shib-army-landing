import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {

    console.log("Use Effect ScrollToTop!")
    window.scrollTo(0, 0);

    return () => {
      console.log("Unmount ScrollToTop!")
    };

  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
