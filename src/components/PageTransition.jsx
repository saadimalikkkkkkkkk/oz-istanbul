import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PageTransition.css";

function PageTransition({ children }) {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [location.pathname]);

  return (
    <div key={key} className="page-transition">
      {children}
    </div>
  );
}

export default PageTransition;