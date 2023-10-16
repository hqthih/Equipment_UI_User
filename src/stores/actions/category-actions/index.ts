import { ECategoryActions } from "./constants";
import { TGetCategoryAction } from "./types";

export const getCategory = (): TGetCategoryAction => ({
  type: ECategoryActions.GET_CATEGORY,
});

export const getCategoryRequestAction = () => ({
  type: ECategoryActions.GET_CATEGORY_REQUEST,
});

export const getCategorySuccessAction = (payload: any) => ({
  type: ECategoryActions.GET_CATEGORY_SUCCESS,
  payload,
});

export const getCategoryFailureAction = (error: any) => ({
  type: ECategoryActions.GET_CATEGORY_FAILURE,
  payload: error,
});
