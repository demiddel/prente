import { createServer, Model } from "miragejs";

// eslint-disable-next-line import/no-anonymous-default-export
export const makeServer = ({ environment = "test" }) => {
  console.log("executed");
  return createServer({
    environment,
    models: {
      product: Model,
    },

    routes() {
      this.namespace = "api";

      this.get("/products");
    },

    seeds(server) {
      server.create("product", {
        name: "Mocha",
        price: 3.5,
        imageUrl: "http://source.unsplash.com/tNALoIZhqVM/200x100/",
      });
      server.create("product", {
        name: "Sencha",
        price: 3.75,
        imageUrl:
          "https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=100",
      });
    },
  });
};
