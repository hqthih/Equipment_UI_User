import { TGetCategoryAction } from "../category-actions/types";
import {
  TCreateRequestEquipment,
  TRequestEquipment,
} from "./../../../interfaces/equipment-interface";
import { ERequestActions } from "./constants";
import { TCreateRequestAction, TGetRequestAction } from "./types";

export const createRequestEquipmentAction = (
  payload: TCreateRequestEquipment,
  cb?: () => void
): TCreateRequestAction => ({
  payload,
  type: ERequestActions.CREATE_REQUEST_EQUIPMENT,
  cb,
});

export const createRequestEquipmentRequestAction = () => ({
  type: ERequestActions.CREATE_REQUEST_EQUIPMENT_REQUEST,
});

export const createRequestEquipmentSuccessAction = () => ({
  type: ERequestActions.CREATE_REQUEST_EQUIPMENT_SUCCESS,
});

export const createRequestEquipmentFailureAction = (error: any) => ({
  type: ERequestActions.CREATE_REQUEST_EQUIPMENT_FAILURE,
  payload: error,
});

export const getRequestEquipmentAction = (
  payload?: number
): TGetRequestAction => ({
  payload,
  type: ERequestActions.GET_REQUEST_EQUIPMENT,
});

export const getRequestEquipmentRequestAction = () => ({
  type: ERequestActions.GET_REQUEST_EQUIPMENT_REQUEST,
});

export const getRequestEquipmentSuccessAction = (
  payload: TRequestEquipment[]
) => ({
  type: ERequestActions.GET_REQUEST_EQUIPMENT_SUCCESS,
  payload,
});

export const getRequestEquipmentFailureAction = (error: any) => ({
  type: ERequestActions.GET_REQUEST_EQUIPMENT_FAILURE,
  payload: error,
});
