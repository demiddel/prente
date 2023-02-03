import { Loading } from "../../molecules/Loading";
import { Error } from "../../molecules/Error";

export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

const ProductList = (status, data, ...otherProps) => {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data!" />;
  }
  // FIXME: Error with data loading

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data &&
          data.map((item) => {
            <li>item.id</li>;
          })}
      </ul>
    </div>
  );
};

export { ProductList };
