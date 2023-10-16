import { TCreateRequestEquipment } from "../../../interfaces/equipment-interface";
import { ERequestActions } from "./constants";

export type TCreateRequestAction = {
  payload: TCreateRequestEquipment;
  type: ERequestActions.CREATE_REQUEST_EQUIPMENT;
  cb?: () => void;
};

export type TGetRequestAction = {
  payload?: number;
  type: ERequestActions.GET_REQUEST_EQUIPMENT;
};
