import { statusTypes } from "../components/organisms/ProductList/ProductList";

const getProducts = async () => {
  try {
    const productsFetch = await fetch("/api/products");
    const productsResponse = await productsFetch.json();

    return {
      data: productsResponse.data,
      status: statusTypes.loaded,
    };
  } catch (error) {
    console.error(error);
    return { data: [], status: statusTypes.error };
  }
};

export { getProducts };
