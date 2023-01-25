import PropTypes from "prop-types";

import "./style.css";

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imageUrl} alt="" />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        Add to Cart
      </button>
    </div>
  );
};

ProductListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  onAddToCart: PropTypes.func,
  isSoldOut: PropTypes.bool,
};

export { ProductListItem };
