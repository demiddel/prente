import { Loading } from "../../molecules/Loading";
import { Error } from "../../molecules/Error";
import { ProductListItem } from "../../molecules/ProductListItem";

export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

const ProductList = ({ status, data, ...otherProps }) => {
  console.log("status check", status);
  if (status === statusTypes.loading) {
    return <Loading message={"loading data"} />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data!" />;
  }
  // FIXME: Error with data loading
  console.log("data productlist", data);
  console.log("propsdata productlist", otherProps);

  return (
    <div>
      <h1>Product List</h1>
      <section>
        {data ? data.map((item) => <ProductListItem {...item} />) : null}
      </section>
    </div>
  );
};

export { ProductList };
