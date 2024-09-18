import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message-container text-center text-danger my-4">
      <div className="error-icon">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <h3>Oops! Something went wrong.</h3>
      <p>{message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
