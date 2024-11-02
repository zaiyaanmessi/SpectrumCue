import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { prediction } = location.state || {}; // Retrieve prediction from location state

  return (
    <div>
      <h1>Result Page</h1>
      {prediction ? (
        <p>ASD Prediction: {prediction}</p>
      ) : (
        <p>No prediction available.</p>
      )}
    </div>
  );
};

export default ResultPage;
