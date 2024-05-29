import express from "express";
import productsRouter from "./routes/productsRouter";
import { fakeProductsData } from "./utils/fakeData";

const app = express();
app.use(express.json());

// ** Routes
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("/api/products", productsRouter);

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
  const product = fakeProductsData.find(item => item.id === +id);
  if (product) {
    res.status(200).json(product);
  } else {
    // ** 3.Check if the product is already exists, filter it out
    res.status(404).json({
      message: `Product with id '${id}' not found`,
    });
  }
});

app.post("/api/products", (req, res) => {
  // ** 1.Get product body
  const product = req.body;
  // ** 2.Add the product to the products list
  fakeProductsData.push({ id: fakeProductsData.length + 1, ...product });
  // ** 3.Send the product back to the client
  res.status(201).json({ id: fakeProductsData.length, ...product });
});

// ** Not Found Route
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

const PORT = 5000;

// ** Setup a server
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
