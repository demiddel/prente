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
    (async () => {
      try {
        const data = await getProducts();
        console.log("data products", data);
        setProductsState({ data, status: statusTypes.loaded });
      } catch (error) {
        console.error(error);
        setProductsState({ data: [], status: statusTypes.error });
      }
    })();
  }, []);

  return (
    <ProductList data={productsState.data} status={productsState.status} />
  );
};
export { Products };
