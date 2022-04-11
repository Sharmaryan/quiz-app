import React from "react";
import './Category.css'
export const Category = ({ category: { category, image } }) => {
  return (
    <div className="category">
      <img src={image} alt={category} className="category-image" />
      <p className="category-title">{category}</p>
      <button className="category-btn">play</button>
    </div>
  );
};
