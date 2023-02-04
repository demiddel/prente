import { statusTypes } from "../components/organisms/ProductList/ProductList";
import { makeServer } from "../server";

makeServer({ environment: "development" });

const getProducts = async () => {
  try {
    const productsFetch = await fetch("/api/products");
    const productsResponse = await productsFetch.json();
    console.log("response called", productsResponse);

    return {
      data: productsResponse.products,
      status: statusTypes.loaded,
    };
  } catch (error) {
    console.error(error);
    return { data: [], status: statusTypes.error };
  }
};

export { getProducts };
