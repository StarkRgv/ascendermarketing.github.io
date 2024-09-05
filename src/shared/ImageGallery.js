import React from "react";
import "./ImageGallery.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, imagesLoading }) => {
  if (imagesLoading) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img
            src={image.source_url}
            alt={image.alt_text || `Image ${index + 1}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt_text: PropTypes.string,
      source_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  imagesLoading: PropTypes.bool.isRequired,
};

export default ImageGallery;
