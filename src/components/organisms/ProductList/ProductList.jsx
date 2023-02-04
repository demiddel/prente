import { Loading } from "../../molecules/Loading";
import { Error } from "../../molecules/Error";

export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

const ProductList = ({ status, data, ...otherProps }) => {
  console.log("status check", status);
  if (status === statusTypes.loading) {
    return <Loading />;
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
      <ul>{data ? data.map((item) => <li>{item.name}</li>) : null}</ul>
    </div>
  );
};

export { ProductList };
