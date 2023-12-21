import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

function CategoryCard({ item }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="categoryCard">
        <img src={item.img} alt="" />
        <span className="description">{item.description}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
