import { createServer } from "miragejs";

const server = () => {
  createServer({
    routes() {
      this.get("/api/products", () => ({
        data: [
          {
            id: 1,
            name: "Mocha",
            price: 3.5,
            imageUrl: "http://source.unsplash.com/tNALoIZhqVM/200x100/",
          },
        ],
      }));
    },
  });
};

export default server;
