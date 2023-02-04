import { Loading } from "../../molecules/Loading";
import { Error } from "../../molecules/Error";
import { ProductListItem } from "../../molecules/ProductListItem";

export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

const ProductList = ({ status, data, ...otherProps }) => {
  if (status === statusTypes.loading) {
    return <Loading message={"loading data"} />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data!" />;
  }

  return (
    <div>
      <h1>Product List</h1>
      <section>
        {data
          ? data.map((item) => <ProductListItem {...item} key={item.id} />)
          : null}
      </section>
    </div>
  );
};

export { ProductList };
