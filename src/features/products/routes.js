import { CatalogPage } from './pages/CatalogPage';
import { ProductPage } from './pages/ProductPage';
import { featureConf } from "./config";


export const routes = [
  {
    key: `${featureConf}/catalog`,
    path: '/catalog',
    component: CatalogPage,
    exact: true,
  },
  {
    key: `${featureConf}/product`,
    path: '/product',
    component: ProductPage,
    exact: true,
  },
];
