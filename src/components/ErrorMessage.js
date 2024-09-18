import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  const refresh = () => {
    window.location.reload(); // Refresh the page
  };
  return (
    <div className="error-message-container text-center text-danger my-4">
      <div className="error-icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <h3>Oops! Something went wrong.</h3>
      <p>{message}</p>
      <button className="btn btn-secondary mt-3" onClick={refresh}>
        Try Again
      </button>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
