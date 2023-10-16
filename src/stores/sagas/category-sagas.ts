import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { ECategoryActions } from "../actions/category-actions/constants";
import {
  getCategoryFailureAction,
  getCategoryRequestAction,
  getCategorySuccessAction,
} from "../actions/category-actions";
import { ICategory } from "../../interfaces/category-interface";
import { toastError } from "../../utils/notifications-utils";
import { getCategoryService } from "../../services/category-services";

function* getCategorySaga() {
  try {
    yield put(getCategoryRequestAction());
    const response: ICategory[] = yield call(getCategoryService);
    yield put(getCategorySuccessAction(response));
  } catch (error: any) {
    yield put(getCategoryFailureAction(error));
    (error as Error).message
      ? toastError((error as Error).message)
      : toastError("Get category failure!!");
  }
}

function* watchOnAuth() {
  yield takeLatest(ECategoryActions.GET_CATEGORY, getCategorySaga);
}

export default function* categorySaga() {
  yield all([fork(watchOnAuth)]);
}
