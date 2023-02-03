import { useEffect, useState } from "react";
import {
  ProductList,
  statusTypes,
} from "../../organisms/ProductList/ProductList";

import { getProducts } from "../../../utils/getProducts";

const initialState = {
  data: [],
  status: statusTypes.loading,
};

const Products = ({ data }) => {
  const [productsState, setProductsState] = useState(initialState);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProductsState({ data: data, status: statusTypes.loaded });
      })
      .catch((error) => {
        console.error(error);
        setProductsState({ data: [], status: statusTypes.error });
      });
  }, []);

  return (
    <ProductList data={productsState.data} status={productsState.status} />
  );
};
export { Products };
