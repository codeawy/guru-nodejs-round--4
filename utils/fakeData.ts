import { Product } from "../interface";

export const fakeProductsData: Product[] = Array.from({ length: 10 }, (_, idx) => ({
  id: idx + 1,
  name: `Product #${idx + 1}`,
  description: `Product #${idx + 1} description`,
  price: Math.floor(Math.random() * 1000) + 100,
  image: `https://picsum.photos/200/300?random=${idx + 1}`,
}));
