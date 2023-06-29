import React from "react";
import "../styles/productCard.css";

const ProductCard = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="outer-card-box">
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>Price : ${price}</p>
          <button
            onClick={() => {
              handleClick(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
