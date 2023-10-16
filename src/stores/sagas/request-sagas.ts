import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { TRequestEquipment } from "../../interfaces/equipment-interface";
import {
  createRequestEquipmentService,
  getRequestEquipmentService,
} from "../../services/request-services";
import { toastError, toastSuccess } from "../../utils/notifications-utils";
import {
  createRequestEquipmentFailureAction,
  createRequestEquipmentRequestAction,
  createRequestEquipmentSuccessAction,
  getRequestEquipmentFailureAction,
  getRequestEquipmentRequestAction,
  getRequestEquipmentSuccessAction,
} from "../actions/request-actions";
import { ERequestActions } from "../actions/request-actions/constants";
import {
  TCreateRequestAction,
  TGetRequestAction,
} from "../actions/request-actions/types";

function* createRequestEquipment({ payload, cb }: TCreateRequestAction) {
  try {
    yield put(createRequestEquipmentRequestAction());
    const response: TRequestEquipment = yield call(
      createRequestEquipmentService,
      payload
    );
    yield put(createRequestEquipmentSuccessAction());
    toastSuccess("Create request equipment success!!");
    cb?.();
  } catch (error: any) {
    yield put(createRequestEquipmentFailureAction(error));
    (error as Error).message
      ? toastError((error as Error).message)
      : toastError("Get request equipment failure!!");
  }
}

function* getRequestEquipment({ payload }: TGetRequestAction) {
  try {
    yield put(getRequestEquipmentRequestAction());
    const response: TRequestEquipment[] = yield call(
      getRequestEquipmentService,
      payload
    );
    yield put(getRequestEquipmentSuccessAction(response));
  } catch (error: any) {
    yield put(getRequestEquipmentFailureAction(error));
    (error as Error).message
      ? toastError((error as Error).message)
      : toastError("Get request equipment failure!!");
  }
}

function* watchOnAuth() {
  yield takeLatest(ERequestActions.GET_REQUEST_EQUIPMENT, getRequestEquipment);
  yield takeLatest(
    ERequestActions.CREATE_REQUEST_EQUIPMENT,
    createRequestEquipment
  );
}

export default function* requestEquipmentSaga() {
  yield all([fork(watchOnAuth)]);
}
