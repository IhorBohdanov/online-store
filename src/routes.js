import { routes as info } from "./features/info/routes";
import { routes as products } from "./features/products/routes";
import { routes as cart } from "./features/cart/routes";
import { routes as checkout } from "./features/checkout/routes";

export const routes = [
  // put here features' routes
  ...info,
  ...products,
  ...cart,
  ...checkout
];
