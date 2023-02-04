import { statusTypes } from "../components/organisms/ProductList/ProductList";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ]);
  },
});

const getProducts = async () => {
  try {
    const productsFetch = await fetch("/api/products");
    const productsResponse = await productsFetch.json();
    console.log("response called", productsResponse);

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
