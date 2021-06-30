import { CheckoutPage } from './pages/CheckoutPage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/checkout`,
    path: '/checkout',
    component: CheckoutPage,
    exact: true,
  },
];
