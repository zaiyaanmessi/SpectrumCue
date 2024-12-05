import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { prediction } = location.state || {}; // Retrieve prediction from location state

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>ASD Prediction Result</h1>
        {prediction ? (
          <p style={styles.resultText}>
            <strong>Prediction:</strong> {prediction}
          </p>
        ) : (
          <div style={styles.loadingContainer}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Processing your results...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e5d4ff, #f6edff)", // Gradient background
    fontFamily: "'Roboto', sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "15px", // Slightly more rounded
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    width: "80%",
    maxWidth: "600px",
    textAlign: "center",
    animation: "fadeIn 1s ease-out", // Smooth fade-in animation
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "1.5rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  resultText: {
    fontSize: "1.75rem",
    color: "#4CAF50",
    fontWeight: "bold",
    marginTop: "1.5rem",
  },
  noPredictionText: {
    fontSize: "1.5rem",
    color: "#FF5733",
    fontWeight: "600",
    marginTop: "1.5rem",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  spinner: {
    border: "8px solid #f3f3f3", // Light grey
    borderTop: "8px solid #3498db", // Blue color for the spinner
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 2s linear infinite",
  },
  loadingText: {
    marginTop: "15px",
    fontSize: "1.2rem",
    color: "#888",
    fontWeight: "500",
  },
};

// Add keyframes for the animation
const animationStyles = {
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
      transform: "scale(0.95)",
    },
    '100%': {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  '@keyframes spin': {
    '0%': {
      transform: "rotate(0deg)",
    },
    '100%': {
      transform: "rotate(360deg)",
    },
  },
};

export default ResultPage;
