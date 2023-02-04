import { useEffect, useState } from "react";
import {
  ProductList,
  statusTypes,
} from "../../organisms/ProductList/ProductList";

import { getProducts } from "../../../utils/getProducts";
import { Loading } from "../../molecules/Loading";

const initialState = {
  data: [],
  status: statusTypes.loading,
};

const Products = ({ data }) => {
  const [productsState, setProductsState] = useState(initialState);

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts();
        setProductsState({ data: products.data, status: statusTypes.loaded });
      } catch (error) {
        console.error(error);
        setProductsState({ data: [], status: statusTypes.error });
      }
    })();
  }, []);

  // FIXME: should not be needed
  if (productsState.status === statusTypes.loading) {
    return <Loading message="getting products" />;
  }

  return (
    <ProductList data={productsState.data} status={productsState.status} />
  );
};
export { Products };
