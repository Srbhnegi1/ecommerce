import { FaSpinner } from "react-icons/fa";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading-container">
      <FaSpinner className="loading-icon" />
    </div>
  );
};

export default Loading;
