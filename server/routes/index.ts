import { Routes } from "./types";
// import your route files here
import thumbnail from "./thumbnail";
import products from "./product";

const ROUTES: Routes = {
  // re-export your route files here
  thumbnail: thumbnail,
  products: products,
};

export default ROUTES;
