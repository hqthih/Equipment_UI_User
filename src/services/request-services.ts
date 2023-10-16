import { TCreateRequestEquipment } from "../interfaces/equipment-interface";
import { ApiClient } from "./api-clients";

export const getRequestEquipmentService = async (payload?: number) => {
  const response = await ApiClient.get(
    `/request/get-request-by-user/${payload}`
  );
  return response.data;
};

export const createRequestEquipmentService = async (
  payload: TCreateRequestEquipment
) => {
  const response = await ApiClient.post(`/request/create-request`, payload);
  return response.data;
};
