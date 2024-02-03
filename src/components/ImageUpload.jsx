/** @format */

import React, { useState } from "react";

function ImageUpload() {
  const [imagePreview, setImagePreview] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    event.target.value = null;
  }

  return (
    <div>
      {!imagePreview && (
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose Profile Picture
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      )}
      {imagePreview && (
        <img className="photo" src={imagePreview} alt="Preview" />
      )}
    </div>
  );
}

export default ImageUpload;
