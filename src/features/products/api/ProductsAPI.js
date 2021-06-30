import { axiosInstance } from "../../../services/axios";

export function getList() {
  return axiosInstance.get('/products');
}

export function get(id) {
  return axiosInstance.get(`/products/${id}`);
}

export function getCategories() {
  return axiosInstance.get(`/products-category`);
}

