import express from "express";
import { Product } from "./interface";

const app = express();

// ** Routes
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

const products: Product[] = Array.from({ length: 10 }, (_, idx) => ({
  id: idx + 1,
  name: `Product #${idx + 1}`,
  description: `Product #${idx + 1} description`,
  price: Math.floor(Math.random() * 1000) + 100,
  image: `https://picsum.photos/200/300?random=${idx + 1}`,
}));

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  // ** 1.Check if the query params are valid
  if (isNaN(+id)) {
    res.status(400).json({
      message: `Invalid product id '${id}'`,
    });
    return;
  }
  // ** 2. if the product not exists, throw an error with (404) status code
  const product = products.find(item => item.id === +id);
  if (product) {
    res.status(200).json(product);
  } else {
    // ** 3.Check if the product is already exists, filter it out
    res.status(404).json({
      message: `Product with id '${id}' not found`,
    });
  }
});

// ** Not Found Route
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

const PORT = 5000;

// ** Setup a server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
