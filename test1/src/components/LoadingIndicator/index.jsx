import { useSelector } from "react-redux";
import "./style.css";

const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.loading) && true;

  return (
    <div
      style={{ visibility: isLoading ? true : "hidden" }}
      className="loading-indicator-wrapper"
    >
      <div className="loader"></div>
      <span>Searching</span>
    </div>
  );
};

export default LoadingIndicator;
