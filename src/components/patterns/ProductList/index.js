export const statusTypes = {
  loading: "loading",
  errored: "errored",
  loaded: "loaded",
};

const Loading = () => {
  return <div>Loading ...</div>;
};
const Error = ({ message }) => {
  return <div>Error: {message}</div>;
};

const ProductList = (status, ...otherProps) => {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (statusTypes.errored) {
    return <Error message="Failed to load data!" />;
  }

  return <div>Product List</div>;
};

export { ProductList };
