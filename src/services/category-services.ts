import { ApiClient } from "./api-clients";

export const getCategoryService = async () => {
  const response = await ApiClient.get(`/category/get-category`);
  return response.data;
};
