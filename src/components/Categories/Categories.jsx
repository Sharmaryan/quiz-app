import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../index";
import './Categories.css'
export const Categories = () => {
  const categories = [
    {
      category: "movies",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
      id: uuidv4(),
    },
    {
      category: "books",
      image:
        "https://cdn.lifehack.org/wp-content/uploads/2014/10/best-entrepreneur-books.jpeg",
      id: uuidv4(),
    },
    {
      category: "web series",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
      id: uuidv4(),
    },
  ];

  return (
    <div className="categories">
      <h1 className="categories-heading">Categories</h1>
      <div className="categories-cards">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};
