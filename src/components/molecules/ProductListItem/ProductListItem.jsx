import PropTypes from "prop-types";

import { Text } from "../../atoms/Text";
import { Button } from "../../atoms/Button";
import { Header } from "../../atoms/Header";
import { Card } from "../../atoms/Card";

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
      <Header>
        {name} {isOnSale && "(On Sale)"}
      </Header>
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
