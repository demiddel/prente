import PropTypes from "prop-types";

import "./style.css";

const Heading = ({ children }) => {
  return <h2>{children}</h2>;
};

const Card = ({ children, highlight }) => {
  const cardClassName = highlight ? "card sale" : "card";

  return <div className={cardClassName}>{children}</div>;
};

const Text = ({ children }) => {
  return <span>{children}</span>;
};

const Button = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const ProductListItem = ({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) => {
  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(On Sale)"}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold Out" : "Add to Cart"}
      </Button>
    </Card>
  );
};

ProductListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  onAddToCart: PropTypes.func,
  isSoldOut: PropTypes.bool,
  isOnSale: PropTypes.bool,
};

export { ProductListItem };
